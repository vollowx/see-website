---
title: Select - Base - SEELE
---

# Select（選擇框）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

用於下拉選擇控制的基礎選擇組件。

## 屬性

| 名稱          | 類型    | 默認值  | 描述                                                     |
| ------------- | ------- | ------- | -------------------------------------------------------- |
| `value`       | String  | `''`    | 選中的值。                                               |
| `displayText` | String  | `''`    | 默認顯示文本，僅在執行 SSR 時設置。                      |
| `open`        | Boolean | `false` | 下拉菜單是否打開。                                       |
| `required`    | Boolean | `false` | 表單提交是否需要選擇。                                   |

注意：還從 [`FormAssociated`](../mixins/form-associated.md) 混合類繼承 `disabled` 屬性。

## 事件

| 名稱     | 類型  | 描述                       |
| -------- | ----- | -------------------------- |
| `change` | Event | 當選中的值改變時觸發。     |
| `input`  | Event | 當選中的值改變時觸發。     |
