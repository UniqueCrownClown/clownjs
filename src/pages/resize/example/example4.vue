<template>
  <div id="example4" class="page">
    <div class="outer-box">
      <div v-resize:all="options" class="inner-box" @resize="handleResizeAll">
        <p class="text">
          Set this box -> resize:all
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { ResizeEvent, ResizeDirective } from '../../../../packages/resize'; 
import { ResizeEvent, ResizeDirective } from '@clownjs/resize'
export default defineComponent({
  directives: {
    resize: ResizeDirective
  },
  setup() {
    return {
      options: {
        // use default
      },
      handleResizeAll (e: ResizeEvent) {
        let el = e.target as HTMLElement;
        let { direction } = e;
        if (direction === 'right') {
          let resizeWidthPercent = e.resizeWidthPercent;
          el.style.width = `${resizeWidthPercent}%`;
        } else if (direction === 'bottom') {
          let resizeHeightPercent = e.resizeHeightPercent;
          el.style.height = `${resizeHeightPercent}%`;
        } else if (direction === 'left') {
          let { moveOffsetPercent, resizeWidthPercent } = e;
          el.style.width = `${resizeWidthPercent}%`;
          el.style.left = `${moveOffsetPercent}%`;
        } else if (direction === 'top') {
          let { moveOffsetPercent, resizeHeightPercent } = e;
          el.style.height = `${resizeHeightPercent}%`;
          el.style.top = `${moveOffsetPercent}%`;
        }
      }
    };
  }
});
</script>
<style scoped>
.page {
  min-width: 700px;
  overflow-x: auto;
}
.outer-box {
  width: 600px;
  height: 500px;
  margin: 20px auto;
  box-shadow: 0 1px 5px #ccc;
  position: relative;
  background: #c2c2e0;
}
.inner-box {
  position: absolute;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
  background: #ffe0e0;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
