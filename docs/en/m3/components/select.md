---
title: Select - M3 - SEELE
---

# Select

Selects allow users to choose one or more items from a list of values.

- Follows: [Menus - Material Design 3](https://m3.material.io/components/menus/overview)
- Inherits: [`Select`](../../base/components/select.md)

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

## Properties

| Name             | Type    | Default | Description                                        |
| ---------------- | ------- | ------- | -------------------------------------------------- |
| `label`          | String  | `''`    | The label text for the select field.               |
| `supportingText` | String  | `''`    | Helper text displayed below the select field.      |
| `error`          | Boolean | `false` | Whether the select is in an error state.           |

Note: Inherits `value`, `displayText`, `open`, `required`, `quick`, `align`, `alignStrategy`, `offset` from [`Select`](../../base/components/select.md), and `disabled` from [`FormAssociated`](../../base/mixins/form-associated.md).

## Methods

| Name      | Description                            |
| --------- | -------------------------------------- |
| `focus()` | Focuses the select element.            |
| `blur()`  | Removes focus from the select element. |
