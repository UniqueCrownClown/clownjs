
  <template>
    <example-frame
      :main-name="mainName"
      :readme-list="readmeList"
      :example-list="exampleList"
    />
  </template>

  <script lang="ts">
  import ExampleFrame from '../../components/ExampleFrame.vue';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: {
      ExampleFrame
    },
    setup() {
      return {
        mainName: "sakura",
        readmeList: [
          {
            name: 'README',
            introduce: '说明文档'
          }
        ],
        exampleList: [
          {
            name: 'Basic',
            introduce: '默认'
          }
        ]
      };
    }
  });
  </script>
    