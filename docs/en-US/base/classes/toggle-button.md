---
title: ToggleButton - Base - SEELE
---

# ToggleButton

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

## Properties

| Name      | Type    | Default | Description                                    |
| --------- | ------- | ------- | ---------------------------------------------- |
| `checked` | Boolean | `false` | Whether the toggle button is in the checked/on state. |

## Events

| Name     | Type                   | Description                                                                                                 |
| -------- | ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `change` | `CustomEvent<boolean>` | Dispatched when the checked state is changed by user. The `detail` property contains the new checked state. |
