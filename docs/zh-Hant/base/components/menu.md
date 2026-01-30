---
title: Menu - Base - SEELE
---

# Menu（菜單）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`Attachable`](../mixins/attachable.md)

用於下拉菜單和彈出菜單的基礎菜單組件。

## 屬性

| 名稱                   | 類型                                                                | 默認值           | 描述                                                         |
| ---------------------- | ------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------ |
| `open`                 | Boolean                                                             | `false`          | 菜單是否打開。                                               |
| `quick`                | Boolean                                                             | `false`          | 是否跳過打開/關閉動畫。                                      |
| `align`                | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'bottom-start'` | 相對於觸發器的菜單對齊方式（例如，'top'、'bottom-start'）。  |
| `alignStrategy`        | [Strategy](https://floating-ui.com/docs/computePosition#strategy)   | `'absolute'`     | 定位策略（`'absolute'` 或 `'fixed'`）。                      |
| `offset`               | Number                                                              | `0`              | 相對於觸發元素的偏移量（像素）。                             |
| `keepOpenBlur`         | Boolean                                                             | `false`          | 失去焦點時是否保持菜單打開。                                 |
| `keepOpenClickItem`    | Boolean                                                             | `false`          | 點擊項目時是否保持菜單打開。                                 |
| `keepOpenClickOutside` | Boolean                                                             | `false`          | 點擊外部時是否保持菜單打開。                                 |

## 事件

| 名稱     | 類型  | 描述                         |
| -------- | ----- | ---------------------------- |
| `select` | Event | 當菜單項被選中時觸發。       |
