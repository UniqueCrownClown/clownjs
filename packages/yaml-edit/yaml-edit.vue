<template>
  <div>Helloworld from vue packages</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  onUnmounted,
  nextTick,
} from "vue";
import { insertAfter } from "../shared";
export default defineComponent({
  name: "YamlEdit",
  props: {
    width: {
      type: String,
      default: "60vw",
    },
    height: {
      type: String,
      default: "70vh",
    },
    animationMode: {
      type: Boolean,
      default: false,
    },
    animationIn: {
      type: String,
      default: "bounceIn",
    },
    animationOut: {
      type: String,
      default: "bounceOut",
    },
    time: {
      type: Number,
      default: 500,
    },
    timingFunction: {
      type: String,
      default: "ease-in-out",
    },
    openFromItself: {
      type: Boolean,
      default: false,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },
    customClass: String,
    customWrapperClass: String,
    listenWindowSizeChange: {
      type: Boolean,
      default: false,
    },
    debounceWait: {
      type: Number,
      default: 200,
    },
    title: {
      type: String,
    },
    closeOnClickOutside: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["beforeClose", "close"],
  setup(props, { emit }) {
    const staticFake = ref();
    const centerFake = ref();
    const main = ref();
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
