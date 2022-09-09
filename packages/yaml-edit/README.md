# Yaml Edit

## 基于 element-plus 的 yaml 文件可视化编辑

### 1 Template 使用

支持使用sync实现渲染数据的双向绑定,通过methods调用的方式获取编辑前后的yaml格式json数据

```html
 <yaml-edit :renderData.sync="combineData" labelWidth="120px" ref="clYamlEditRef" />
```

### 2 Attrs 属性

|参数|说明|类型|可选值|默认值|
|:---|:---|:---|:---|:---|
|renderData|渲染数据|Object|-|{}|
|labelWidth|label宽度|string|-|100px|

### 3 Methods 方法

| 方法名        | 说明                        | 参数                                                    |
| :-------------| :---------------------------| :----------------------------------------------------- |
| initData     | 初始化渲染数据               | 入参:defineData: 表单定义数据, yamlData: yaml的Json数据   |
| parseToYaml  | 转化渲染数据回yaml的json数据  | 入参:renderData: 渲染数据,出参: yamlData:yaml的Json数据   |
