---
title: Tooltip - Base - SEELE
---

# Tooltip（工具提示）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`Attachable`](../mixins/attachable.md)

用於顯示上下文信息的基礎工具提示組件。

## 屬性

| 名稱      | 類型                                                                | 默認值  | 描述                                                                   |
| --------- | ------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| `align`   | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'top'` | 相對於控件的工具提示對齊方式（例如，'top'、'bottom'、'left'、'right'）。 |
| `offset`  | Number                                                              | `4`     | 相對於控件元素的偏移量（像素）。                                       |
| `visible` | Boolean                                                             | `false` | 工具提示當前是否可見。                                                 |
