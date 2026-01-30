---
title: Text Field - M3 - SEELE
---

# 文本字段

文本字段允許用戶在 UI 中輸入文本。

- 遵循：[Text Fields - Material Design 3](https://m3.material.io/components/text-fields/overview)
- 繼承自：[`Input`](../../base/components/input.md)

<!-- @docs-demo-code-block -->

```html
<md-outlined-text-field
  label="Labelled"
  placeholder="Placeholder"
></md-outlined-text-field>
<md-filled-text-field
  label="Labelled"
  placeholder="Placeholder"
></md-filled-text-field>
```

## 屬性

| 名稱             | 類型    | 默認值 | 描述                                    |
| ---------------- | ------- | ------- | ---------------------------------------------- |
| `label`          | String  | `''`    | 文本字段的標籤文本。             |
| `supportingText` | String  | `''`    | 顯示在文本字段下方的輔助文本。    |
| `focused`        | Boolean | `false` | 文本字段是否處於焦點狀態。             |

注意：繼承 [`Input`](../../base/components/input.md) 的 `type`、`value`、`placeholder`、`required`、`readOnly`、`multiple`、`min`、`max`、`step`、`minLength`、`maxLength`、`pattern`、`autocomplete` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 方法

| 名稱       | 描述                            |
| ---------- | -------------------------------------- |
| `focus()`  | 聚焦文本字段。                |
| `blur()`   | 移除文本字段的焦點。     |
| `select()` | 選擇字段的文本內容。 |
