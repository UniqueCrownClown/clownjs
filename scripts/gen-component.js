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
const name = getConfig()?.name;
if (name) {
  // package.json
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
  // README.md
  writeAFile(
    path.join(__dirname, `./../packages/${name}/`),
    "README.md",
    `
  # ${name}
  ## helloworld!!!
    `
  );

  // index.ts
  writeAFile(
    path.join(__dirname, `./../packages/${name}/`),
    "index.ts",
    `export default {}`
  );
}
