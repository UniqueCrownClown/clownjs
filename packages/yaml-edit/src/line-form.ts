interface IRenderData {
	disabled?: boolean
	multiple: boolean
	options: Array<any>
}
interface IDetailVal {
	value: string
}
export const lineFormEmits = {
	change: (value: any, renderData: any, detailVal?: any, totalValue?: any) =>
		value || renderData || detailVal || totalValue,
}
export interface IlineFormProps {
	type: string,
	label: string,
	disabled: boolean,
	propValue: any,
	/**
	 * 每个子项的others值
	 * @values Object
	 * @since Version 1.0.0
	 */
	renderData: IRenderData,
	/**
	 * 每个子项的值,多选下拉时才传递
	 * @values Object
	 * @since Version 1.0.0
	 */
	detailVal: IDetailVal
}
export type IRenderDataObj = {
	[key: string]: any
}
