---
title: Select - Base - SEELE
---

# Select（选择框）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

用于下拉选择控制的基础选择组件。

## 属性

| 名称          | 类型    | 默认值  | 描述                                                     |
| ------------- | ------- | ------- | -------------------------------------------------------- |
| `value`       | String  | `''`    | 选中的值。                                               |
| `displayText` | String  | `''`    | 默认显示文本，仅在执行 SSR 时设置。                      |
| `open`        | Boolean | `false` | 下拉菜单是否打开。                                       |
| `required`    | Boolean | `false` | 表单提交是否需要选择。                                   |

注意：还从 [`FormAssociated`](../mixins/form-associated.md) 混合类继承 `disabled` 属性。

## 事件

| 名称     | 类型  | 描述                       |
| -------- | ----- | -------------------------- |
| `change` | Event | 当选中的值改变时触发。     |
| `input`  | Event | 当选中的值改变时触发。     |

## 方法

继承所有标准 HTMLElement 方法。
