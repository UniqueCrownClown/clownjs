const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const ts = require("typescript");
(async () => {
  const toCamelCase = (name) => {
    return name
      .split("-")
      .map((str) => {
        return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
      })
      .join("");
  };
  const meta = await inquirer.prompt([
    {
      type: "input",
      message: "请输入你要构建的包目录：",
      name: "compName",
    },
  ]);
  const { compName } = meta;
  if (compName) {
    const tsFiles = [];
    const dirName = `packages/${compName}`;
    fs.access(dirName, fs.constants.F_OK, async (err) => {
      console.log(`${dirName} ${err ? "does not exist" : "exists"}`);
      if (!err) {
        const { checkbox } = await inquirer.prompt([
          {
            name: "checkbox",
            type: "checkbox",
            message: "checkbox",
            choices: ["dts", "umd", "cmd", "esm"],
            default: ["dts"],
          },
        ]);
        const { walkPackageDirs, build } = require("./build");

        // dts编译
        if (checkbox.includes("dts")) {
          const compile = (fileNames) => {
            const options = {
              declaration: true,
              emitDeclarationOnly: true,
            };
            const host = ts.createCompilerHost(options);
            host.writeFile = (fileName, contents) => {
              const typeFileName = path.basename(fileName);
              const typeDir = path.dirname(fileName);
              const filePath = path.join(`${typeDir}/dist`, typeFileName);
              if (!fs.existsSync(typeDir)) {
                fs.mkdirSync(typeDir, {
                  recursive: true,
                });
              }
              fs.writeFileSync(filePath, contents);
              console.log(chalk.green(filePath));
            };
            const program = ts.createProgram(fileNames, options, host);
            program.emit();
          };
          const files = fs.readdirSync(dirName);
          files.map((file) => {
            if (/\.ts$/.test(file)) {
              tsFiles.push(`${dirName}/${file}`);
            }
          });
          console.log(chalk.green("构建dts..."));
          compile(tsFiles);
        }
        if (checkbox.includes("umd")) {
          // umd编译
          const complieUmdFn = async (dirName) => {
            fs.mkdirSync(`./packages/${dirName}/dist`, { recursive: true });
            console.log(chalk.green("构建umd..."));
            await build({
              input: `./packages/${dirName}/index.ts`,
              output: {
                file: `./packages/${dirName}/dist/index.umd.js`,
                format: "umd",
                exports: "named",
                name: `clown-${toCamelCase(dirName)}`,
                globals: {
                  "resize-observer-polyfill": "ResizeObserver",
                  vue: "Vue",
                },
              },
              external: (id) =>
                ["resize-observer-polyfill", "vue"].includes(id) ||
                id.includes("@clownjs"),
            });
          };
          await walkPackageDirs(complieUmdFn, compName);
        }
        if (checkbox.includes("cmd")) {
          // cjs编译
          const complieCjsFn = async (dirName) => {
            fs.mkdirSync(`./packages/${dirName}/dist`, { recursive: true });
            console.log(chalk.green("构建cmd..."));
            await build({
              input: `./packages/${dirName}/index.ts`,
              output: {
                file: `./packages/${dirName}/dist/index.js`,
                exports: "named",
                format: "cjs",
              },
              external: (id) =>
                ["resize-observer-polyfill", "tslib", "vue"].includes(id) ||
                id.includes("@clownjs"),
              // terser: terser({
              //   output: {
              //     comments: false
              //   }
              // })
            });
          };
          await walkPackageDirs(complieCjsFn, compName);
        }
        if (checkbox.includes("esm")) {
          // esm编译
          const complieEsFn = async (dirName) => {
            fs.mkdirSync(`./packages/${dirName}/dist`, { recursive: true });
            console.log(chalk.green("构建esm..."));
            await build({
              input: `./packages/${dirName}/index.ts`,
              output: {
                file: `./packages/${dirName}/dist/index.es.js`,
                format: "esm",
              },
              external: (id) =>
                ["resize-observer-polyfill", "tslib", "vue"].includes(id) ||
                id.includes("@clownjs"),
            });
          };
          await walkPackageDirs(complieEsFn, compName);
        }
      }
    });
  }
})();
