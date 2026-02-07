---
title: Slider - Base - SEELE
---

# Slider

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FocusDelegated`](../mixins/focus-delegated.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

A base slider component that provides range input functionality with support for single value and range (dual handle) modes.

## Properties

| Name                 | Type    | Default | Description                                                                          |
| -------------------- | ------- | ------- | ------------------------------------------------------------------------------------ |
| `min`                | Number  | `0`     | The minimum value of the slider.                                                     |
| `max`                | Number  | `100`   | The maximum value of the slider.                                                     |
| `value`              | Number  | -       | The current value (for single value mode).                                           |
| `valueStart`         | Number  | -       | The start value (for range mode).                                                    |
| `valueEnd`           | Number  | -       | The end value (for range mode).                                                      |
| `valueLabel`         | String  | `''`    | Label text for the value (single mode).                                              |
| `valueLabelStart`    | String  | `''`    | Label text for the start value (range mode).                                         |
| `valueLabelEnd`      | String  | `''`    | Label text for the end value (range mode).                                           |
| `ariaLabelStart`     | String  | `''`    | ARIA label for the start handle.                                                     |
| `ariaValueTextStart` | String  | `''`    | ARIA value text for the start handle.                                                |
| `ariaLabelEnd`       | String  | `''`    | ARIA label for the end handle.                                                       |
| `ariaValueTextEnd`   | String  | `''`    | ARIA value text for the end handle.                                                  |
| `step`               | Number  | `1`     | The step increment for slider values.                                                |
| `ticks`              | Boolean | `false` | Whether to display tick marks along the slider track.                                |
| `labeled`            | Boolean | `false` | Whether to display value labels on the handles.                                      |
| `range`              | Boolean | `false` | Whether to enable range mode with start and end handles.                             |
| `nameStart`          | String  | -       | Form name for the start value. Uses `name-start` attribute or falls back to `name`.  |
| `nameEnd`            | String  | -       | Form name for the end value. Uses `name-end` attribute or falls back to `nameStart`. |

## Methods

| Name                  | Description                                             |
| --------------------- | ------------------------------------------------------- |
| `focus()`             | Focuses the slider's end input element.                 |
| `formResetCallback()` | Called when the form is reset, restores initial values. |

## Events

| Name     | Type         | Description                                                                      |
| -------- | ------------ | -------------------------------------------------------------------------------- |
| `input`  | `InputEvent` | Dispatched when the slider value changes during user interaction.                |
| `change` | `Event`      | Dispatched when the slider value changes and the user completes the interaction. |

## Form Association

The Slider component is form-associated and can be used within forms. In single
value mode, it submits a single value. In range mode, it submits two values
using `nameStart` and `nameEnd`.
