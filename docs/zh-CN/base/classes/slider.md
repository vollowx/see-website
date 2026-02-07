---
title: Slider - Base - SEELE
---

# Slider

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FocusDelegated`](../mixins/focus-delegated.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

一个基础滑块组件，提供范围输入功能，支持单值模式和范围模式。

## 属性

| 名称                 | 类型    | 默认值  | 描述                                                           |
| -------------------- | ------- | ------- | -------------------------------------------------------------- |
| `min`                | Number  | `0`     | 滑块的最小值。                                                 |
| `max`                | Number  | `100`   | 滑块的最大值。                                                 |
| `value`              | Number  | -       | 当前值（单值模式）。                                           |
| `valueStart`         | Number  | -       | 起始值（范围模式）。                                           |
| `valueEnd`           | Number  | -       | 结束值（范围模式）。                                           |
| `valueLabel`         | String  | `''`    | 值的标签文本（单值模式）。                                     |
| `valueLabelStart`    | String  | `''`    | 起始值的标签文本（范围模式）。                                 |
| `valueLabelEnd`      | String  | `''`    | 结束值的标签文本（范围模式）。                                 |
| `ariaLabelStart`     | String  | `''`    | 起始手柄的 ARIA 标签。                                         |
| `ariaValueTextStart` | String  | `''`    | 起始手柄的 ARIA 值文本。                                       |
| `ariaLabelEnd`       | String  | `''`    | 结束手柄的 ARIA 标签。                                         |
| `ariaValueTextEnd`   | String  | `''`    | 结束手柄的 ARIA 值文本。                                       |
| `step`               | Number  | `1`     | 滑块值的步进增量。                                             |
| `ticks`              | Boolean | `false` | 是否沿滑块轨道显示刻度标记。                                   |
| `labeled`            | Boolean | `false` | 是否在手柄上显示值标签。                                       |
| `range`              | Boolean | `false` | 是否启用带有起始和结束手柄的范围模式。                         |
| `nameStart`          | String  | -       | 起始值的表单名称。使用 `name-start` 属性，或回退到 `name`。    |
| `nameEnd`            | String  | -       | 结束值的表单名称。使用 `name-end` 属性，或回退到 `nameStart`。 |

## 方法

| 名称                  | 描述                           |
| --------------------- | ------------------------------ |
| `focus()`             | 聚焦滑块的结束输入元素。       |
| `formResetCallback()` | 当表单重置时调用，恢复初始值。 |

## 事件

| 名称     | 类型         | 描述                             |
| -------- | ------------ | -------------------------------- |
| `input`  | `InputEvent` | 在用户交互期间滑块值更改时触发。 |
| `change` | `Event`      | 滑块值更改且用户完成交互时触发。 |

## 表单关联

Slider 组件是表单关联的，可以在表单中使用。在单值模式下，它提交单个值。在范围模式下，它使用 `nameStart` 和 `nameEnd` 提交两个值。
