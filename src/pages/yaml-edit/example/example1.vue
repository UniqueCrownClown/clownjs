<template>
  <div class="wrapper">
    <h3>example from yamlEdit:</h3>
    <yamlEdit :renderData.sync="combineData" labelWidth="120px" ref="clYamlEditRef" />
  </div>
</template>

<script lang="ts">
import { onMounted, ref, unref, defineComponent } from "vue";
// import YamlEdit from "../../../../packages/yaml-edit/";
import YamlEdit from "@clownjs/yaml-edit";
export default defineComponent({
  components: {
    YamlEdit,
  },
  setup() {
    const combineData = ref({});
    const clYamlEditRef = ref();
    const defineData = {
      enable: {
        type: "switch",
        desc: "总开关",
      },
      resourceDef: {
        desc: "resourceDef",
        children: {
          outAdaptors: {
            type: "input",
            desc: "outAdaptors",
            children: {
              nioHttpOutAdaptor: {
                isArray: true,
                desc: "nioHttpOutAdaptor",
                children: {
                  resourceExpr: {
                    type: "input",
                    desc: "resourceExpr",
                  },
                  usageType: {
                    type: "input",
                    desc: "usageType",
                  },
                },
              },
            },
          },
        },
      },
      rules: {
        isArray: true,
        desc: "",
        children: {
          resource: {
            type: "input",
            desc: "resource",
          },
          enable: {
            type: "input",
            desc: "enable",
          },
          grade: {
            type: "select",
            desc: "grade",
            others: {
              options: [
                {
                  label: "慢调用比例",
                  value: "0",
                },
                {
                  label: "异常比例",
                  value: "1",
                },
                {
                  label: "异常数",
                  value: "2",
                },
              ],
            },
          },
          timeWindow: {
            type: "input",
            desc: "timeWindow",
          },
          count: {
            type: "input",
            desc: "count",
          },
          minRequestAmount: {
            type: "input",
            desc: "minRequestAmount",
          },
          slowRatioThreshold: {
            type: "input",
            desc: "slowRatioThreshold",
          },
          statIntervalMs: {
            type: "input",
            desc: "statIntervalMs",
          },
        },
      },
    };
    const yamlData = {
      enable: true,
      resourceDef: {
        outAdaptors: {
          nioHttpOutAdaptor: [
            {
              resourceExpr: "/out/${serviceCode}",
            },
            {
              resourceExpr:
                "/out/http/${__rf.host}:${__rf.varPort}/${serviceCode}",
              usageType: "SND_RCV",
            },
          ],
        },
      },
      rules: [
        {
          resource: "\/out\/test",
          enable: true,
          grade: 0,
          timeWindow: 10,
          count: 1000,
          minRequestAmount: 1,
          slowRatioThreshold: 0.6,
          statIntervalMs: 10000,
        },
      ],
    };
    onMounted(() => {
      combineData.value = unref(clYamlEditRef).initData(defineData, yamlData);
    });
    return {
      combineData,
      clYamlEditRef,
    };
  },
});
</script>
