const fs = require('fs');
const chalk = require('chalk');
const { build, walkPackageDirs } = require('./build');

console.log(chalk.blue('正在生成umd模块!'));

const complieUmdFn = (dirName) => {
  fs.mkdirSync(`./packages/${dirName}/dist`,{ recursive:true });
  build({
    input: `./packages/${dirName}/index.ts`,
    output: {
      file: `./packages/${dirName}/dist/index.umd.js`,
      format: 'umd',
      exports:'named',
      name: `clown-${toCamelCase(dirName)}`,
      globals: {
        'resize-observer-polyfill': 'ResizeObserver',
        'vue': 'Vue'
      }
    },
    external: id => ['resize-observer-polyfill', 'vue'].includes(id) || id.includes('@clownjs')
  });
}

walkPackageDirs(complieUmdFn);

function toCamelCase(name) {
  return name.split('-').map(str => {
    return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();
  }).join('');
}

module.exports = {
  complieUmdFn
}