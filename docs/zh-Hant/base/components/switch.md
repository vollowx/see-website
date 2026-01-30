---
title: Switch - Base - SEELE
---

# Switch（開關）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

## 屬性

| 名稱      | 類型    | 默認值  | 描述                             |
| --------- | ------- | ------- | -------------------------------- |
| `checked` | Boolean | `false` | 開關是否處於選中/打開狀態。      |

注意：還從 [`FormAssociated`](../mixins/form-associated.md) 混合類繼承 `disabled` 屬性。

## 事件

| 名稱     | 類型                   | 描述                                                                 |
| -------- | ---------------------- | -------------------------------------------------------------------- |
| `change` | `CustomEvent<boolean>` | 當選中狀態改變時觸發。`detail` 屬性包含新的選中狀態。                |
