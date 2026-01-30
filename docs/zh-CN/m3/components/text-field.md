---
title: Text Field - M3 - SEELE
---

# 文本字段

文本字段允许用户在 UI 中输入文本。

- 遵循：[Text Fields - Material Design 3](https://m3.material.io/components/text-fields/overview)
- 继承自：[`Input`](../../base/components/input.md)

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

## 属性

| 名称             | 类型    | 默认值 | 描述                                    |
| ---------------- | ------- | ------- | ---------------------------------------------- |
| `label`          | String  | `''`    | 文本字段的标签文本。             |
| `supportingText` | String  | `''`    | 显示在文本字段下方的辅助文本。    |
| `focused`        | Boolean | `false` | 文本字段是否处于焦点状态。             |

注意：继承 [`Input`](../../base/components/input.md) 的 `type`、`value`、`placeholder`、`required`、`readOnly`、`multiple`、`min`、`max`、`step`、`minLength`、`maxLength`、`pattern`、`autocomplete` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 方法

| 名称       | 描述                            |
| ---------- | -------------------------------------- |
| `focus()`  | 聚焦文本字段。                |
| `blur()`   | 移除文本字段的焦点。     |
| `select()` | 选择字段的文本内容。 |
