---
title: Select - Base - SEELE
---

# Select

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

Base select component for dropdown selection controls.

## Properties

| Name           | Type    | Default | Description                                                       |
| -------------- | ------- | ------- | ----------------------------------------------------------------- |
| `value`        | String  | `''`    | The selected value.                                               |
| `displayText`  | String  | `''`    | The default display text, should only be set when doing SSR.      |
| `open`         | Boolean | `false` | Whether the dropdown menu is open.                                |
| `required`     | Boolean | `false` | Whether a selection is required for form submission.              |

Note: Also inherits `disabled` property from [`FormAssociated`](../mixins/form-associated.md) mixin.

## Events

| Name     | Type  | Description                                |
| -------- | ----- | ------------------------------------------ |
| `change` | Event | Fired when the selected value has changed. |
| `input`  | Event | Fired when the selected value has changed. |
