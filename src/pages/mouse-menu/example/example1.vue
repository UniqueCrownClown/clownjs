<template>
  <div v-mouse-menu="options" class="box">
    <p class="text">
      {{ !isMobile ? 'Right click this box' : 'Long press this box' }}.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { MouseMenuDirective } from '../../../../packages/mouse-menu'; 
import { MouseMenuDirective } from '@clownjs/mouse-menu';
export default defineComponent({
  directives: {
    MouseMenu: MouseMenuDirective
  },
  setup() {
    return {
      isMobile: 'ontouchstart' in window,
      options: {
        params: { a: 1 },
        useLongPressInMobile: true,
        menuList: [
          {
            label: '打开',
            tips: 'Open',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => console.log('open', params, currentEl, bindingEl, e)
          },
          {
            label: '编辑',
            tips: 'Edit',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => console.log('edit', params, currentEl, bindingEl, e)
          },
          {
            label: '删除',
            tips: 'Delete',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => console.log('delete', params, currentEl, bindingEl, e)
          },
          {
            label: '重命名',
            tips: 'Rename',
            fn: (params: any, currentEl: HTMLElement, bindingEl: HTMLElement, e: MouseEvent) => console.log('rename', params, currentEl, bindingEl, e)
          }
        ]
      }
    };
  }
});
</script>

<style scoped>
.box {
  width: 500px;
  width: min(90vw, 500px);
  height: 500px;
  background: #ffe0e0;
  margin: 0 auto;
}
.text {
  font-size: 12px;
  color: #889;
  padding: 5px;
}
</style>
