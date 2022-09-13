const fs = require("fs");
const { exec, execSync } = require("child_process");
const path = require("path");
// const args = require("minimist")(process.argv.slice(2));
// 轻量级的nodejs命令行参数解析工具
// const mode = args["mode"];
// if (mode === "dev") {
// }

fs.readdir(path.join(__dirname, "./../packages/"), function (err, files) {
  if (!err) {
    linknpm(files);
  }
});
const linknpm = (pkgArr) => {
  const instruc = (name) => `npm link @clownjs/${name}`;
  // 执行命令
  for (let i = 0; i < pkgArr.length; i++) {
    (function (pkgName) {
      exec(
        "npm link",
        { cwd: path.join(process.cwd(), "packages", pkgName) },
        (error, stdout, stderr) => {
          if (!error) {
            // 成功
            console.log("npm link is success", stdout);
            execSync(
              instruc(pkgName),
              { cwd: path.join(__dirname, "./../") },
              (error, stdout, stderr) => {
                if (!error) {
                  // 成功
                  console.log("npm link module is success", stdout);
                } else {
                  // 失败
                  console.log("npm link module is failed", stderr);
                }
              }
            );
          } else {
            // 失败
            console.log("npm link is failed", stderr);
          }
        }
      );
    })(pkgArr[i]);
  }
};
