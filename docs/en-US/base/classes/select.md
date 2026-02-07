---
title: Select - Base - SEELE
---

# Select

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FocusDelegated`](../mixins/focus-delegated.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

Base select component for dropdown selection controls.

## Properties

| Name              | Type                                                                | Default          | Description                                                       |
| ----------------- | ------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------- |
| `value`           | String                                                              | `''`             | The selected value.                                               |
| `selectedIndex`   | Number                                                              | `-1`             | The index of the selected option.                                 |
| `selectedOptions` | Array                                                               | `[]`             | Array of currently selected option elements.                      |
| `displayText`     | String                                                              | `''`             | The default display text, should only be set when doing SSR.      |
| `open`            | Boolean                                                             | `false`          | Whether the dropdown menu is open.                                |
| `required`        | Boolean                                                             | `false`          | Whether a selection is required for form submission.              |
| `error`           | Boolean                                                             | `false`          | Whether the select is in an error state.                          |
| `quick`           | Boolean                                                             | `false`          | Whether to skip open/close animations.                            |
| `offset`          | Number                                                              | `0`              | Offset from the field element in pixels.                          |
| `align`           | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'bottom-start'` | Menu alignment relative to field (e.g., 'top', 'bottom-start').   |
| `alignStrategy`   | [Strategy](https://floating-ui.com/docs/computePosition#strategy)   | `'absolute'`     | Positioning strategy (`'absolute'` or `'fixed'`).                 |

## Methods

| Name              | Parameters | Description                                    |
| ----------------- | ---------- | ---------------------------------------------- |
| `select(value)`   | `value`    | Select an option by its value.                 |
| `selectIndex(i)`  | `i`        | Select an option by its index.                 |
| `reset()`         |            | Reset to initially selected options.           |
| `toggle()`        |            | Toggle the menu open/closed state.             |

## Events

| Name     | Type  | Description                                |
| -------- | ----- | ------------------------------------------ |
| `change` | Event | Fired when the selected value has changed. |
| `input`  | Event | Fired when the selected value has changed. |
