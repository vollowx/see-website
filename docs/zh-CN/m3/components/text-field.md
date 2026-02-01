---
title: 文本框 - M3 - SEELE
---

# 文本框

文本框允许用户在 UI 中输入文本。

- 遵循：[Text Fields - Material Design 3](https://m3.material.io/components/text-fields/overview)
- 继承自：[`Input`](../../base/classes/input.md)

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

| 名称             | 类型    | 默认值  | 描述                         |
| ---------------- | ------- | ------- | ---------------------------- |
| `label`          | String  | `''`    | 文本框的标签文本。           |
| `supportingText` | String  | `''`    | 显示在文本框下方的辅助文本。 |
| `focused`        | Boolean | `false` | 文本框是否处于焦点状态。     |

## 方法

| 名称       | 描述                 |
| ---------- | -------------------- |
| `focus()`  | 聚焦文本框。         |
| `blur()`   | 移除文本框的焦点。   |
| `select()` | 选择字段的文本内容。 |
