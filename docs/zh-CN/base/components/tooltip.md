---
title: Tooltip - Base - SEELE
---

# Tooltip（工具提示）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`Attachable`](../mixins/attachable.md)

用于显示上下文信息的基础工具提示组件。

## 属性

| 名称      | 类型                                                                | 默认值  | 描述                                                                   |
| --------- | ------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| `align`   | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'top'` | 相对于控件的工具提示对齐方式（例如，'top'、'bottom'、'left'、'right'）。 |
| `offset`  | Number                                                              | `4`     | 相对于控件元素的偏移量（像素）。                                       |
| `visible` | Boolean                                                             | `false` | 工具提示当前是否可见。                                                 |

## 方法

继承所有标准 HTMLElement 方法。
