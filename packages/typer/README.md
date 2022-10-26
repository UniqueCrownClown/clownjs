# typer

## 说明

typer 是一个轻量级的插件, 用于实现页面文字的打字机效果. 它使用起来非常简单, 只需要几行代码就能实现高大上的打字机效果.而且对 MVVM 框架支持完美，还兼容原生 JS.

## 使用

1. 普通使用

```ts
import Typer from "@clownjs/typer";
const typing = new Typer(
  obj,
  `落霞与孤鹜齐飞，秋水共长天一色。`,
  (instance) => {
    // 回调函数
    // 此回调一般用于获取新的数据然后循环输出
    // instance { 实例Typer }
    console.log(instance); // 打印出实例对象
  },
  (output, instance) => {
    // 钩子函数
    // output { 当前帧的输出内容 }
    // instance { 实例Typer }
    // 通过钩子函数动态更新dom元素
    document.getElementById("output").innerHTML = `${output}`;
  }
);
```

2. vue 使用

```vue
<template>
  // 动态绑定
  <div>{{ obj.output }}</div>
</template>
<script>
import Typer from "@clownjs/typer";
export default {
  name: "home",
  data() {
    return {
      obj: {
        output: "",
        // 其他参数省略，实际你需要完整配置哦T^T
      },
    };
  },
  mounted() {
    const typed = new Typer(this.obj, `我将要被打字机输出`);
  },
};
</script>
```
