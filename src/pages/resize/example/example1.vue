<template>
  <div class="page">
    <div class="wrapper">
      <div v-resize="options" class="box1" @resize="handleResizeX">
        <p class="text">
          Set this box default resize
        </p>
      </div>
      <div ref="resize" class="box2"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
// import { ResizeEvent, ResizeDirective } from '../../../../packages/resize'; 
import { ResizeEvent, ResizeDirective } from '@clownjs/resize'
export default defineComponent({
  directives: {
    resize: ResizeDirective
  },
  setup() {
    const resize = ref();
    return {
      resize,
      options: {
        // use default
      },
      handleResizeX (e: ResizeEvent) {
        console.log('resizeEvent', e);
        let el = e.target as HTMLElement;
        if (e.resizeWidthPercent) {
          el.style.width = `${e.resizeWidthPercent}%`;
          resize.value.style.width = `${100 - e.resizeWidthPercent}%`;
        }
      }
    };
  }
});
</script>
<style scoped>
.page {
  overflow-x: auto;
}
.wrapper {
  width: 800px;
  height: 500px;
  margin: 20px auto;
  display: flex;
  box-shadow: 0 1px 5px #ccc;
  position: relative;
}
.box1 {
  width: 50%;
  height: 100%;
  background: #c2c2e0;
}
.box2 {
  width: 50%;
  height: 100%;
  background: #ffe0e0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
