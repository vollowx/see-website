---
title: Switch - Base - SEELE
---

# Switch（开关）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

## 属性

| 名称      | 类型    | 默认值  | 描述                             |
| --------- | ------- | ------- | -------------------------------- |
| `checked` | Boolean | `false` | 开关是否处于选中/打开状态。      |

注意：还从 [`FormAssociated`](../mixins/form-associated.md) 混合类继承 `disabled` 属性。

## 事件

| 名称     | 类型                   | 描述                                                                 |
| -------- | ---------------------- | -------------------------------------------------------------------- |
| `change` | `CustomEvent<boolean>` | 当选中状态改变时触发。`detail` 属性包含新的选中状态。                |

## 方法

继承所有标准 HTMLElement 方法。
