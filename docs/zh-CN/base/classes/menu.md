---
title: Menu - Base - SEELE
---

# Menu

- 混入：[`InternalsAttached`](../mixins/internals-attached.md)
- 混入：[`FocusDelegated`](../mixins/focus-delegated.md)
- 混入：[`Attachable`](../mixins/attachable.md)

用于下拉菜单和弹出菜单的基础菜单组件。

## 属性

| 名称                | 类型                                                                | 默认值           | 描述                                                        |
| ------------------- | ------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------- |
| `type`              | String                                                              | `'menu'`         | 菜单的 ARIA 角色类型（`'menu'` 或 `'listbox'`）。           |
| `open`              | Boolean                                                             | `false`          | 菜单是否打开。                                              |
| `quick`             | Boolean                                                             | `false`          | 是否跳过打开/关闭动画。                                     |
| `align`             | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'bottom-start'` | 相对于触发器的菜单对齐方式（例如，'top'、'bottom-start'）。 |
| `alignStrategy`     | [Strategy](https://floating-ui.com/docs/computePosition#strategy)   | `'absolute'`     | 定位策略（`'absolute'` 或 `'fixed'`）。                     |
| `offset`            | Number                                                              | `0`              | 相对于触发元素的偏移量（像素）。                            |
| `keepOpenBlur`      | Boolean                                                             | `false`          | 失去焦点时是否保持菜单打开。                                |
| `keepOpenClickItem` | Boolean                                                             | `false`          | 点击项目时是否保持菜单打开。                                |
| `keepOpenClickAway` | Boolean                                                             | `false`          | 点击外部时是否保持菜单打开。                                |
| `noListControl`     | Boolean                                                             | `false`          | 是否禁用列表键盘导航控制。                                  |
| `noFocusControl`    | Boolean                                                             | `false`          | 是否禁用自动焦点管理。                                      |
| `tabIndex`          | Number                                                              | `0`              | 菜单元素的 tab 索引。                                       |

## 方法

| 名称                | 参数   | 描述                     |
| ------------------- | ------ | ------------------------ |
| `show()`            |        | 打开菜单。               |
| `close()`           |        | 关闭菜单。               |
| `focusFirstItem()`  |        | 聚焦菜单中的第一项。     |
| `focusLastItem()`   |        | 聚焦菜单中的最后一项。   |
| `focusItem(item)`   | `item` | 聚焦菜单中的特定项目。   |

## 事件

| 名称         | 类型               | 描述                   |
| ------------ | ------------------ | ---------------------- |
| `open`       | Event              | 当菜单打开时触发。     |
| `close`      | Event              | 当菜单关闭时触发。     |
| `select`     | MenuSelectEvent    | 当菜单项被选中时触发。 |
| `item-focus` | MenuItemFocusEvent | 当菜单项聚焦时触发。   |
