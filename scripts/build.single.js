const { complieCjsFn } = require("./build.cjs");
const { complieUmdFn } = require("./build.umd");
const { complieEsFn } = require("./build.es");
const { walkDir, compile } = require("./build.dts");
const { walkPackageDirs } = require("./build");
const inquirer = require("inquirer");

const meta = await inquirer.prompt([
  {
    type: "input",
    message: "请输入你要构建的包目录：",
    name: "compName",
  },
]);
const { compName } = meta;
if (compName) {
  walkPackageDirs(complieCjsFn, compName);
  walkPackageDirs(complieUmdFn, compName);
  walkPackageDirs(complieEsFn, compName);
  // dts编译
  const tsFiles = [];
  walkDir(`packages/${compName}`, (path) => {
    const files = fs.readdirSync(path);
    files.map((file) => {
      if (/\.ts$/.test(file)) {
        tsFiles.push(`${path}/${file}`);
      }
    });
  });
  compile(tsFiles);
}
