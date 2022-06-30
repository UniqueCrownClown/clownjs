<template>
	<div class="single-line-form" style="display: inline-block; width: 100%">
		<el-select
			v-if="type === 'select'"
			v-model="value"
			:label="label"
			:disabled="renderDisabled"
			:multiple="renderData.multiple || false"
			placeholder="请选择"
			@change="selectChange"
		>
			<el-option
				v-for="item in renderData.options"
				:key="item.value"
				:label="item.label"
				:value="item.value"
			>
			</el-option>
		</el-select>
		<el-switch
			v-else-if="type === 'switch'"
			v-model="value"
			:label="label"
			:disabled="renderDisabled"
			active-color="#13ce66"
			inactive-color="#ff4949"
			active-value="true"
			inactive-value="false"
		>
		</el-switch>
		<el-input
			v-else
			v-model="value"
			:label="label"
			:disabled="renderDisabled"
			placeholder="请输入内容"
		></el-input>
	</div>
</template>
<script lang="ts" setup>
import { ref, computed, watch, onBeforeMount } from 'vue'
const props = withDefaults(defineProps<{
	type: string
	label: string
	disabled: boolean
	modelValue: any
	renderData: any
	detailVal: any
}>(), {
	type: 'input',
	label: '',
	disabled: false,
	modelValue: "",
	renderData: () => ({
		multiple: false,
		options: [{ label: 'hello', value: 'world' }],
	}),
	detailVal: () => ({
		value: '',
	}),
})
const emit = defineEmits(['change', 'selectChange'])
const value = ref()
let totalValue = {}
onBeforeMount(() => {
	if (props.renderData.multiple) {
		totalValue = props.detailVal.value
	}
	if (Array.isArray(props.modelValue)) {
		value.value = props.modelValue
		if (props.modelValue.length > 0) {
			emit(
				'selectChange',
				props.modelValue,
				props.renderData,
				props.detailVal,
				totalValue
			)
		}
	} else {
		value.value = props.modelValue.toString()
		if (props.type === 'select') {
			// 初始化也触发一下联动
			emit('selectChange', props.modelValue, props.renderData)
		}
	}
})
const selectChange = (val: any) => {
	if (props.renderData?.multiple) {
		emit('selectChange', val, props.renderData, props.detailVal, totalValue)
		return
	}
	emit('selectChange', val, props.renderData)
}
const renderDisabled = computed(
	() => props.renderData?.disabled || props.disabled
)
watch(value, (newVal) => {
	emit('change', newVal)
})
</script>
