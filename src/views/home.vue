<template>
  <div id="Home">
    <readme-frame :readme="readme" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ReadmeFrame from '../components/ReadmeFrame.vue';
import readme from '../../README.md';
const isHashRouterMode = import.meta.env.VITE_ROUTER_MODE === 'hash';
const isProd = import.meta.env.PROD
export default defineComponent({
  name: 'Home',
  components: {
    ReadmeFrame
  },
  setup() {
    return {
      readme: isProd && !isHashRouterMode ? readme : readme.replace(/https:\/\/uniquecrownclown.github.io\/clownjs/g, '.')
    };
  }
});
</script>
<style lang="scss" scoped>
</style>
