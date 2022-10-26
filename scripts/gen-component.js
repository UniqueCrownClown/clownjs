const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");

const writeAFile = (target, fileName, data) => {
  const _path = target + fileName;
  return new Promise((resolve) => {
    fs.mkdir(path.resolve(target), { recursive: true }, (err) => {
      if (err) {
        resolve(err);
      } else {
        fs.writeFile(_path, data, function (err) {
          if (err) {
            // 写入文件失败
            console.log("写入文件失败:", err);
          } else {
            // 写入文件成功
            console.log("写入文件成功");
            err = {
              code: "000000",
            };
          }
          resolve(err);
        });
      }
    });
  });
};
const mdUpdate = ({ target, fileName, appendText, matchMode }) => {
  const fs = require("fs");
  const path = require("path");
  fs.readFile(path.join(target, fileName), "utf8", function (err, data) {
    if (err) throw err;

    const newContent = data.replace(matchMode, appendText + matchMode);
    fs.writeFile(path.join(target, fileName), newContent, "utf8", (err) => {
      if (err) throw err;
      console.log("success done");
    });
  });
};
// 读取 public/list.json 并更新
const listjsonUpdate = (meta) => {
  const listFilePath = "./../public/list.json";
  const listFileTpl = fs.readFileSync(
    path.resolve(__dirname, listFilePath),
    "utf-8"
  );
  const listFileContent = JSON.parse(listFileTpl);
  listFileContent.push(meta);
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
  fs.writeFile(
    path.resolve(__dirname, listFilePath),
    newListFileContentFile,
    (err) => {
      if (err) console.log(err);
    }
  );
  return listFileContent;
};
const fileBuild = (name) => {
  if (name) {
    // packages-package.json
    writeAFile(
      path.join(__dirname, `./../packages/${name}/`),
      "package.json",
      `
  {
    "name": "@clownjs/${name}",
    "version": "0.0.1",
    "description": "",
    "author": "UniqueCrownClown",
    "license": "ISC",
    "repository": {
      "type": "git",
      "url": "git+ssh://git@github.com/UniqueCrownClown/clownjs.git"
    },
    "homepage": "https://uniquecrownclown.github.io/clownjs",
    "publishConfig": {
      "access": "public",
      "registry": "https://registry.npmjs.org/"
    },
    "bugs": {
      "url": "https://github.com/UniqueCrownClown/clownjs/issues"
    }
  }
  `
    );
    // packages-README.md
    writeAFile(
      path.join(__dirname, `./../packages/${name}/`),
      "README.md",
      `
    # ${name}
    ## helloworld!!!
      `
    );
    // packages-index.ts
    writeAFile(
      path.join(__dirname, `./../packages/${name}/`),
      "index.ts",
      `export default {}`
    );
    // pages-index.vue
    writeAFile(
      path.join(__dirname, `./../src/pages/${name}/`),
      "index.vue",
      `
  <template>
    <example-frame
      :main-name="mainName"
      :readme-list="readmeList"
      :example-list="exampleList"
    />
  </template>

  <script lang="ts">
  import ExampleFrame from '../../components/ExampleFrame.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      ExampleFrame
    },
    setup() {
      return {
        mainName: "${name}",
        readmeList: [
          {
            name: 'README',
            introduce: '说明文档'
          }
        ],
        exampleList: [
          {
            name: 'Basic',
            introduce: '默认'
          }
        ]
      };
    }
  });
  </script>
    `
    );
    // pages-example-example1.vue
    writeAFile(
      path.join(__dirname, `./../src/pages/${name}/example/`),
      "example1.vue",
      `
  <template>
    <div class="wrapper">{{title}}
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  // import ${name} from '../../../../packages/${name}';
  export default defineComponent({
    setup() {
      const title = ref("HelloWorld");
      return {
        title,
      };
    }
  });
  </script>
    `
    );
    // code-example-example.md
    writeAFile(
      path.join(__dirname, `./../src/code/${name}/`),
      "example1.md",
      "```vue" +
        `
  <template>
    <div class="wrapper">{{title}}
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  // import ${name} from '../../../../packages/${name}';
  export default defineComponent({
    setup() {
      const title = ref("HelloWorld");
      return {
        title,
      };
    }
  });
  </script>
    ` +
        "```"
    );
  }
};
const listFilePath = "../public/list.json";
const RegxMap = {
  IS_COMP_NAME: /(-{0,2}[a-z][a-z0-9_])*/,
  IS_COMP_ZH_NAME:
    /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/,
};

const main = async () => {
  const meta = await inquirer.prompt([
    {
      type: "input",
      message: "请输入你要新建的组件名（串式）：",
      name: "compName",
      validate(answer) {
        const done = this.async();
        const validateRes = RegxMap.IS_COMP_NAME.test(answer);
        if (!validateRes) {
          done("请按要求输入正确的组件名！");
          return;
        }
        const listData = fs.readJSONSync(path.resolve(__dirname, listFilePath));
        if (listData.find((item) => item.compName === answer)) {
          done("已存在同名组件，请确认后更换名字再重试！");
          return;
        }
        done(null, true);
      },
    },
    {
      type: "input",
      message: "请输入你要新建的组件名（中文）：",
      name: "compZhName",
      validate(answer) {
        const done = this.async();
        const validateRes = RegxMap.IS_COMP_ZH_NAME.test(answer);
        if (!validateRes) {
          done("请按要求输入正确的组件名！");
          return;
        }
        done(null, true);
      },
    },
    {
      type: "input",
      message: "请输入组件的功能描述：",
      name: "compDesc",
      default: "默认：这是一个新组件",
    },
  ]);
  const { compName, compDesc } = meta;
  fileBuild(compName);
  // update README.md
  // 用---来区分分隔
  mdUpdate({
    target: path.join(__dirname, `./../`),
    fileName: "README.md",
    appendText: `- **[@clownjs/${compName}](https://uniquecrownclown.github.io/clownjs/#/${compName})**  \r\n\t${compDesc}\r\n\r\n`,
    matchMode: "---\r\n\r\n## 开始使用"
  });
  listjsonUpdate(meta);
};
main();
