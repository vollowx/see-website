---
title: Switch - Base - SEELE
---

# Switch

- 混入：[`InternalsAttached`](../mixins/internals-attached.md)
- 混入：[`FormAssociated`](../mixins/form-associated.md)

## 属性

| 名称      | 类型    | 默认值  | 描述                        |
| --------- | ------- | ------- | --------------------------- |
| `checked` | Boolean | `false` | 开关是否处于选中/打开状态。 |

## 事件

| 名称     | 类型                   | 描述                                                  |
| -------- | ---------------------- | ----------------------------------------------------- |
| `change` | `CustomEvent<boolean>` | 当选中状态改变时触发。`detail` 属性包含新的选中状态。 |
