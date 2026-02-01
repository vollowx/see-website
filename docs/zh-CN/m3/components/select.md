---
title: 选择器 - M3 - SEELE
---

# 选择器

选择器允许用户从一组值中选择一个或多个项目。

- 遵循：[Menus - Material Design 3](https://m3.material.io/components/menus/overview)
- 继承自：[`Select`](../../base/classes/select.md)

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

## 属性

| 名称             | 类型    | 默认值  | 描述                         |
| ---------------- | ------- | ------- | ---------------------------- |
| `label`          | String  | `''`    | 选择框的标签文本。           |
| `supportingText` | String  | `''`    | 显示在选择框下方的辅助文本。 |
| `error`          | Boolean | `false` | 选择框是否处于错误状态。     |
