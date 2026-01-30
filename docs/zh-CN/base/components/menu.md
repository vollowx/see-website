---
title: Menu - Base - SEELE
---

# Menu（菜单）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`Attachable`](../mixins/attachable.md)

用于下拉菜单和弹出菜单的基础菜单组件。

## 属性

| 名称                   | 类型                                                                | 默认值           | 描述                                                         |
| ---------------------- | ------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------ |
| `open`                 | Boolean                                                             | `false`          | 菜单是否打开。                                               |
| `quick`                | Boolean                                                             | `false`          | 是否跳过打开/关闭动画。                                      |
| `align`                | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'bottom-start'` | 相对于触发器的菜单对齐方式（例如，'top'、'bottom-start'）。  |
| `alignStrategy`        | [Strategy](https://floating-ui.com/docs/computePosition#strategy)   | `'absolute'`     | 定位策略（`'absolute'` 或 `'fixed'`）。                      |
| `offset`               | Number                                                              | `0`              | 相对于触发元素的偏移量（像素）。                             |
| `keepOpenBlur`         | Boolean                                                             | `false`          | 失去焦点时是否保持菜单打开。                                 |
| `keepOpenClickItem`    | Boolean                                                             | `false`          | 点击项目时是否保持菜单打开。                                 |
| `keepOpenClickOutside` | Boolean                                                             | `false`          | 点击外部时是否保持菜单打开。                                 |

## 事件

| 名称     | 类型  | 描述                         |
| -------- | ----- | ---------------------------- |
| `select` | Event | 当菜单项被选中时触发。       |
