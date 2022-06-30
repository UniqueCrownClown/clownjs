
**一个包含Javascript插件、Vue3组件、Vue3指令的轻量工具组件库**  
*A universal component packages of javascript plugins or tools* 


## Link
+ <a href="https://github.com/UniqueCrownClown/clownjs" target="_blank">⚡Github</a>
+ <a href="https://www.npmjs.com/search?q=%40clownjs" target="_blank">💾NPM</a>

---

## 组件
1. **[@clownjs/animation-dialog](https://uniquecrownclown.github.io/clownjs/animation-dialog)**  
✨动画模态框Vue3组件

2. **[@clownjs/standard-tabs](https://uniquecrownclown.github.io/clownjs/standard-tabs)**  
✨移动端标签页Vue3组件

3. **[@clownjs/mouse-menu](https://uniquecrownclown.github.io/clownjs/mouse-menu)**  
✨自定义右键菜单Vue3组件

4. **[@clownjs/yaml-edit](https://uniquecrownclown.github.io/clownjs/yaml-edit)**  
✨yaml编辑Vue3组件

5. **[@clownjs/resize](https://uniquecrownclown.github.io/clownjs/resize)**  
✨通过拖拽更改元素尺寸插件

6. **[@clownjs/size-observer](https://uniquecrownclown.github.io/clownjs/size-observer)**  
✨监听元素尺寸变化插件
---

## 开始使用

### 安装
```cmd
// 新版已进行分包
npm i -S @clownjs/XXX

// 旧版
npm i -S clownjs
```

### 使用

+ 新版进行了分包，可按需安装相应的分包
+ 新版的Vue组件只可在Vue3中使用，而指令做了向下兼容可同时在Vue2.X中使用
+ 多数包是基于原生JS编写的，基本可直接原生使用，只是为了方便提供了VUE指令的封装形式

## 关于项目

### Packages
+ 使用`lerna`进行分包管理，执行`npm run bootstrap`项目初始化
+ 使用`rollup`进行打包， 执行`npm run build:pkg`打包各Packages，包含cjs、es和其d.ts文件

### 展示站点
+ 开发环境及展示站点使用`vite`搭建，lerna初始化、安装依赖、打包Packages，完成后执行`npm run example`启动
+ 站点路由文件使用`import.meta.glob`读取文件目录**自动生成**，原则上不需更改路由文件

### 贡献与本地开发

在项目初始化后，执行`npm run backup-package-json && npm run example`可使展示站点直接引用项目中Packages的代码并实现热更新，但注意开发完后要执行`npm run reset-package-json`恢复各包的**package.json**。

原理是更改`package.json`的main字段指向开发的源文件，而发包的时候再将main字段入口文件指向打包后的`index.js`，后续有可能把这种方式更改为软连接的方式。

### 参考资料
[howdyjs](https://github.com/leon-kfd/howdyjs)
