<template>
  <div class="wrapper">
    <h3>hellowrold from example</h3>
    <yaml-edit/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import YamlEdit from "../../../../packages/yaml-edit";
export default defineComponent({
  components: {
    YamlEdit,
  },
  setup() {
    const dialog = ref();
    return {
      dialog,
    };
  },
});
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
