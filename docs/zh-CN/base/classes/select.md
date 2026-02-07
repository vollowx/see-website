---
title: Select - Base - SEELE
---

# Select

- 混入：[`InternalsAttached`](../mixins/internals-attached.md)
- 混入：[`FocusDelegated`](../mixins/focus-delegated.md)
- 混入：[`FormAssociated`](../mixins/form-associated.md)

用于下拉选择控制的基础选择组件。

## 属性

| 名称              | 类型                                                                | 默认值           | 描述                                                     |
| ----------------- | ------------------------------------------------------------------- | ---------------- | -------------------------------------------------------- |
| `value`           | String                                                              | `''`             | 选中的值。                                               |
| `selectedIndex`   | Number                                                              | `-1`             | 选中选项的索引。                                         |
| `selectedOptions` | Array                                                               | `[]`             | 当前选中的选项元素数组。                                 |
| `displayText`     | String                                                              | `''`             | 默认显示文本，仅在执行 SSR 时设置。                      |
| `open`            | Boolean                                                             | `false`          | 下拉菜单是否打开。                                       |
| `required`        | Boolean                                                             | `false`          | 表单提交是否需要选择。                                   |
| `error`           | Boolean                                                             | `false`          | 选择框是否处于错误状态。                                 |
| `quick`           | Boolean                                                             | `false`          | 是否跳过打开/关闭动画。                                  |
| `offset`          | Number                                                              | `0`              | 距离字段元素的偏移量（像素）。                           |
| `align`           | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'bottom-start'` | 菜单相对于字段的对齐方式（例如 'top'、'bottom-start'）。 |
| `alignStrategy`   | [Strategy](https://floating-ui.com/docs/computePosition#strategy)   | `'absolute'`     | 定位策略（`'absolute'` 或 `'fixed'`）。                  |

## 方法

| 名称              | 参数    | 描述                     |
| ----------------- | ------- | ------------------------ |
| `select(value)`   | `value` | 通过值选择一个选项。     |
| `selectIndex(i)`  | `i`     | 通过索引选择一个选项。   |
| `reset()`         |         | 重置为初始选中的选项。   |
| `toggle()`        |         | 切换菜单的打开/关闭状态。 |

## 事件

| 名称     | 类型  | 描述                   |
| -------- | ----- | ---------------------- |
| `change` | Event | 当选中的值改变时触发。 |
| `input`  | Event | 当选中的值改变时触发。 |
