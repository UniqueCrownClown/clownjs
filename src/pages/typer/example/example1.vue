<template>
  <div>{{ obj.output }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import typer from "../../../../packages/typer/index";
// import typer from "@clownjs/typer/index.ts";
export default defineComponent({
  setup() {
    // 计算属性
    const obj = reactive({
      output: "",
      isEnd: false,
      speed: 100,
      singleBack: true,
      sleep: 10,
      type: "normal",
      backSpeed: 40,
      sentencePause: true
    });

    // 实例化
    onMounted(() => {
      const typed = new typer(obj, `落霞与孤鹜齐飞，秋水共长天一色。`);
    });

    return {
      obj,
    };
  },
});
</script>
