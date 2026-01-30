---
title: Select - M3 - SEELE
---

# 選擇框

選擇框允許用戶從一組值中選擇一個或多個項目。

- 遵循：[Menus - Material Design 3](https://m3.material.io/components/menus/overview)
- 繼承自：[`Select`](../../base/components/select.md)

<!-- @docs-demo-code-block -->

```html
<md-outlined-select>
  <md-option value="apple">Apple</md-option>
  <md-option value="apricot">Apricot</md-option>
  <md-option value="banana">Banana</md-option>
  <md-option value="cherry">Cherry</md-option>
  <md-option value="grape">Grape</md-option>
  <md-option value="lemon">Lemon</md-option>
  <md-option value="mango">Mango</md-option>
  <md-option value="orange">Orange</md-option>
  <md-option value="strawberry">Strawberry</md-option>
  <md-option value="watermelon">Watermelon</md-option>
</md-outlined-select>
```

## 屬性

| 名稱             | 類型    | 默認值 | 描述                                        |
| ---------------- | ------- | ------- | -------------------------------------------------- |
| `label`          | String  | `''`    | 選擇框的標籤文本。               |
| `supportingText` | String  | `''`    | 顯示在選擇框下方的輔助文本。      |
| `error`          | Boolean | `false` | 選擇框是否處於錯誤狀態。           |

注意：繼承 [`Select`](../../base/components/select.md) 的 `value`、`displayText`、`open`、`required`、`quick`、`align`、`alignStrategy`、`offset` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 方法

| 名稱      | 描述                            |
| --------- | -------------------------------------- |
| `focus()` | 聚焦選擇框元素。            |
| `blur()`  | 移除選擇框元素的焦點。 |
