const fs = require("fs");
const path = require("path");
const { getConfig } = require("./build");
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
const inSertBefore = ({ target, fileName, appendText, matchMode }) => {
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
const name = getConfig()?.name;
if (name) {
  // packages-package.json
  writeAFile(
    path.join(__dirname, `./../packages/${name}/`),
    "package.json",
    `
  {
    "name": "@clownjs/helloworld",
    "version": "0.0.1",
    "description": "",
    "author": "UniqueCrownClown",
    "license": "ISC",
    "repository": {
      "type": "git",
      "url": "git+ssh://git@github.com/UniqueCrownClown/clownjs.git"
    },
    "homepage": "https://uniquecrownclown.github.io/clownjs",
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

  // update README.md
  // 用---来区分分隔
  inSertBefore({
    target: path.join(__dirname, `./../`),
    fileName: "README.md",
    appendText: `- **[@clownjs/${name}](https://uniquecrownclown.github.io/clownjs/${name})**  \r\n\r\n`,
    matchMode: "---\r\n\r\n## 开始使用",
  });
}