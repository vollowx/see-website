---
title: ListItem - Base - SEELE
---

# ListItem（列表項）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

用於菜單和選擇框中的交互式列表項的基礎組件。

由於使用了 `ariaActiveDescendant`，列表項實際上並不會被聚焦，而是在 CSS 中使用 `:state(focused)`，或通過重寫 `changed()` 來處理自定義行爲。

## 屬性

| 名稱       | 類型    | 默認值  | 描述                       |
| ---------- | ------- | ------- | -------------------------- |
| `selected` | Boolean | `false` | 列表項是否被選中。         |
| `focused`  | Boolean | `false` | 列表項是否有焦點。         |

注意：還從 [`FormAssociated`](../mixins/form-associated.md) 混合類繼承 `disabled` 屬性。

## 方法

| 名稱      | 描述                       |
| --------- | -------------------------- |
| `focus()` | 在視覺上將焦點狀態設置爲真。 |
| `blur()`  | 在視覺上將焦點狀態設置爲假。 |
