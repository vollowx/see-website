---
title: Text Field - M3 - SEELE
---

# Text Field

Text fields let users enter text into a UI.

- Follows: [Text Fields - Material Design 3](https://m3.material.io/components/text-fields/overview)
- Inherits: [`Input`](../../base/components/input.md)

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

## Properties

| Name             | Type    | Default | Description                                    |
| ---------------- | ------- | ------- | ---------------------------------------------- |
| `label`          | String  | `''`    | The label text for the text field.             |
| `supportingText` | String  | `''`    | Helper text displayed below the text field.    |
| `focused`        | Boolean | `false` | Whether the text field is focused.             |

Note: Inherits `type`, `value`, `placeholder`, `required`, `readOnly`, `multiple`, `min`, `max`, `step`, `minLength`, `maxLength`, `pattern`, `autocomplete` from [`Input`](../../base/components/input.md), and `disabled` from [`FormAssociated`](../../base/mixins/form-associated.md).

## Methods

| Name       | Description                            |
| ---------- | -------------------------------------- |
| `focus()`  | Focuses the text field.                |
| `blur()`   | Removes focus from the text field.     |
| `select()` | Selects the text content of the field. |
