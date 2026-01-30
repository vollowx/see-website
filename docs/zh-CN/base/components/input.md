---
title: Input - Base - SEELE
---

# Input（输入框）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

基于文本的表单输入基础组件。

## 属性

| 名称           | 类型    | 默认值   | 描述                                                   |
| -------------- | ------- | -------- | ------------------------------------------------------ |
| `type`         | String  | `'text'` | 输入类型（text、email、password 等）。                 |
| `value`        | String  | `''`     | 输入框的当前值。                                       |
| `placeholder`  | String  | `''`     | 输入框为空时显示的占位符文本。                         |
| `required`     | Boolean | `false`  | 输入框是否为表单提交所必需。                           |
| `readOnly`     | Boolean | `false`  | 输入框是否为只读。                                     |
| `multiple`     | Boolean | `false`  | 输入框是否接受多个值（例如，email）。                  |
| `min`          | String  | `''`     | 数字或日期输入的最小值。                               |
| `max`          | String  | `''`     | 数字或日期输入的最大值。                               |
| `step`         | String  | `''`     | 数字输入的步进间隔。                                   |
| `minLength`    | Number  | `-1`     | 文本输入的最小长度。                                   |
| `maxLength`    | Number  | `-1`     | 文本输入的最大长度。                                   |
| `pattern`      | String  | `''`     | 用于验证的正则表达式模式。                             |
| `autocomplete` | String  | `''`     | 浏览器的自动完成提示。                                 |

注意：还从 [`FormAssociated`](../mixins/form-associated.md) 混合类继承 `disabled` 属性。
