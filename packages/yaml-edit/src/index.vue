<template>
  <div class="yamlEdit">
    <el-form
      label-position="right"
      :label-width="labelWidth"
      v-for="(value, key) in renderData"
      :key="key"
    >
      <el-form-item :label="value.desc" v-if="!value.children">
        <el-col :span="24">
          <lineForm
            :disabled="!isEdit"
            :type="value.type"
            :renderData="value.others"
            v-model="value.value"
            @selectChange="selectChange"
          />
        </el-col>
      </el-form-item>
      <!-- 配置项定义多选start -->
      <el-form-item
        :label="value.desc"
        v-if="value.others && value.others.multiple"
      >
        <el-col :span="24">
          <lineForm
            :disabled="!isEdit"
            :type="value.type"
            :renderData="value.others"
            :detailVal="value"
            v-model="value.optionsValue"
            @selectChange="selectChange"
          />
        </el-col>
        <!-- <el-col v-if="value.others && value.others.multiple">
          <yamlEdit
            :renderData="multiShowData"
            :isEdit="false"
            :label-width="labelWidth"
          />
        </el-col> -->
      </el-form-item>
      <!-- && !(value.others && value.others.multiple) -->
      <!-- 配置项定义多选end -->
      <el-form-item
        :label="value.others && value.others.multiple ? '' : value.desc"
        v-if="value.children"
      >
        <el-col v-if="value.isArray && isEdit" style="margin-bottom: 10px">
          <el-button :icon="Plus" @click="handleAddRow(value)"
            >新增{{ value.desc }}</el-button
          >
        </el-col>
        <el-col
          v-if="!value.isArray"
          style="border: 1px solid #aaa; margin-bottom: 10px"
        >
          <div style="padding: 10px; position: relative">
            <yamlEdit
              v-if="value.others && value.others.multiple"
              :renderData="multiShowData"
              :label-width="labelWidth"
            />
            <yamlEdit
              v-else
              :renderData="value.value"
              :label-width="labelWidth"
            />
          </div>
        </el-col>
        <!-- 数组类型 -->
        <el-col
          v-else
          v-for="(item, index) in value.value"
          :key="item.desc + '-' + index"
          style="border: 1px solid #ccc; margin-bottom: 10px"
        >
          <div style="padding: 10px; position: relative">
            <el-icon v-if="isEdit" @click="handleDelRow(value, index)"
              ><Delete
            /></el-icon>
            <yamlEdit :renderData="item" :label-width="labelWidth" />
          </div>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
export default {
  name: "yamlEdit",
};
</script>
<script lang="ts" setup>
import { Delete, Plus } from "@element-plus/icons-vue";
import { nextTick, watch } from "vue";
import lineForm from "./lineForm.vue";
import type { IRenderDataObj } from "./line-form";
let multiShowData = {};
const initData = (defineData: any, yamlData: any) => {
  const circleGet = (
    defineData: ArrayLike<unknown> | { [s: string]: unknown },
    yamlData: { [x: string]: any }
  ): any => {
    const entries: any[] = Object.entries(defineData);
    const flatArr = entries.reduce((prev, item) => {
      if (item[1].children && yamlData[item[0]]) {
        if (item[1].isArray && yamlData[item[0]]?.length > 0) {
          // yamlData[item[0]]是个数组
          const arrData = yamlData[item[0]].map((element: any) =>
            circleGet(item[1].children, element)
          );
          return [
            ...prev,
            [
              item[0],
              {
                ...item[1],
                value: arrData,
              },
            ],
          ];
        }
        // 兼容一下多选下拉 start
        if (item[1]?.others?.multiple) {
          // 取第一层Key做value
          const optionsValue = Object.keys(yamlData[item[0]]);
          const cEntries: any[] = Object.entries(item[1].children);
          // 取全量的key,value
          const totalYamlData = cEntries.map((elem) => {
            return Object.keys(yamlData[item[0]]).includes(elem[0])
              ? [elem[0], yamlData[item[0]][elem[0]]]
              : [elem[0], elem[1].defaultValue];
          });
          return [
            ...prev,
            [
              item[0],
              {
                ...item[1],
                value: circleGet(
                  item[1].children,
                  Object.fromEntries(totalYamlData)
                ),
                optionsValue,
              },
            ],
          ];
        }
        // 兼容一下多选下拉 end
        return [
          ...prev,
          [
            item[0],
            {
              ...item[1],
              value: circleGet(item[1].children, yamlData[item[0]]),
            },
          ],
        ];
      }
      // 只有有值时才显示
      if (yamlData[item[0]] !== undefined) {
        console.log(yamlData[item[0]]);
        return [
          ...prev,
          [
            item[0],
            {
              ...item[1],
              value: yamlData[item[0]] + "", // 转成string
            },
          ],
        ];
      }
      return [...prev];
    }, []);
    return Object.fromEntries(flatArr);
  };
  const combineData = circleGet(defineData, yamlData);
  return combineData;
};
const parseToYaml = (renderData: any) => {
  // renderData转yarmData
  const data = JSON.parse(JSON.stringify(renderData));
  for (let prop in data) {
    if (data[prop].children) {
      if (data[prop].isArray && Array.isArray(data[prop].value)) {
        const arrResult = data[prop].value.map((item: any) =>
          parseToYaml(item)
        );
        data[prop] = arrResult;
      } else {
        const childResult = parseToYaml(data[prop].value);
        data[prop] = childResult;
      }
    } else {
      // 值非空时才处理，布尔一定有之
      if (data[prop].value) {
        if (Number.isNaN(Number(data[prop].value))) {
          if (data[prop].value === "true" || data[prop].value === "false") {
            // string转boolean
            data[prop] = JSON.parse(data[prop].value);
          } else {
            // string
            data[prop] = data[prop].value;
          }
        } else {
          // string转number
          data[prop] = new Number(data[prop].value);
        }
      } else {
        delete data[prop];
      }
    }
  }
  return data;
};
const getCircleValue = (data: { [x: string]: any }, judgeIsOnce = false) => {
  // judgeIsOnce用来兼容数组键值对的isOnce属性,实现数组的部分键值对为可缺省
  for (let prop in data) {
    if (data[prop].children) {
      const childResult = getCircleValue(data[prop].children, judgeIsOnce);
      if (data[prop].isArray) {
        data[prop] = { ...data[prop], value: [childResult] };
      }
      data[prop] = { ...data[prop], value: childResult };
    } else {
      const value = data[prop].others?.defaultValue || "";
      const isRequire = judgeIsOnce && data[prop].others?.isOnce;
      if (isRequire) {
        delete data[prop];
      } else {
        data[prop] = { ...data[prop], value };
      }
    }
  }
  return data;
};
const handleAddRow = (value: any) => {
  // 兼容数组键值对的isOnce属性
  let judgeIsOnce = false;
  if (value.value.length >= 1) {
    judgeIsOnce = true;
  }
  const itemValue = getCircleValue(
    JSON.parse(JSON.stringify(value.children)),
    judgeIsOnce
  );
  // console.log(itemValue);
  if (!value?.value) {
    value.value = [];
  }
  value.value.push(itemValue);
};
const handleDelRow = (value: any, index: any) => {
  const cloneData = JSON.parse(JSON.stringify(value));
  cloneData.value.splice(index, 1);
  value.value = [];
  nextTick(() => {
    value.value = cloneData.value;
  });
};
const selectChange = (
  val: string | string[],
  drawData: {
    optionRelations: {
      descRules: { [s: string]: unknown } | ArrayLike<unknown>;
      target: string | number;
    };
  },
  detailVal: { children: any; value: { [k: string]: unknown } },
  totalValue: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  if (detailVal?.children) {
    const result = Object.entries(totalValue).filter((item) =>
      val.includes(item[0])
    );

    multiShowData = detailVal.value = Object.fromEntries(result) || {};
    return;
    // console.log(multiShowData);
  }
  // 处理联动start
  if (drawData?.optionRelations) {
    const descItem = Object.entries(drawData.optionRelations.descRules).find(
      (item) => item[0] === val
    );
    if (Array.isArray(descItem) && descItem.length === 2) {
      props.renderData[drawData.optionRelations.target].desc = descItem[1];
    }
  }
  // 处理联动end
};
const props = withDefaults(
  defineProps<{
    renderData: IRenderDataObj;
    isEdit: boolean;
    labelWidth: string;
  }>(),
  {
    renderData: () => ({ apple: "2" }),
    isEdit: () => true,
    labelWidth: () => "100px",
  }
);
const emit = defineEmits(["update:renderData"]);
watch(
  props.renderData,
  (newVal) => {
    emit("update:renderData", newVal);
  },
  { deep: true }
);
defineExpose({
  initData,
  parseToYaml,
});
</script>
<style lang="scss">
@import "./yamlEdit.scss"
</style>
