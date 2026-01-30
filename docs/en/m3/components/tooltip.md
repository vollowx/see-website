---
title: Tooltip - M3 - SEELE
---

# Tooltip

Tooltips display informative text when users hover over, focus on, or tap an element.

- Follows: [Tooltips - Material Design 3](https://m3.material.io/components/tooltips/overview)
- Inherits: [`Tooltip`](../../base/components/tooltip.md)

<!-- @docs-demo-code-block -->

```html
<md-icon-button id="tooltip-anchor">
  <iconify-icon icon="material-symbols:search"></iconify-icon>
</md-icon-button>
<md-tooltip for="tooltip-anchor">Search for contact</md-tooltip>
<md-icon-button id="tooltip-anchor-2">
  <iconify-icon icon="material-symbols:settings"></iconify-icon>
</md-icon-button>
<md-tooltip for="tooltip-anchor-2">Settings</md-tooltip>
<md-button id="tooltip-anchor-3">
  Max Width
  <iconify-icon slot="icon" icon="material-symbols:width"></iconify-icon>
</md-button>
<md-tooltip for="tooltip-anchor-3"
  >Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel
  aliquam tellus. Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.</md-tooltip
>
```

## Properties

| Name  | Type   | Default | Description                                      |
| ----- | ------ | ------- | ------------------------------------------------ |
| `for` | String | `''`    | The ID of the element that the tooltip is attached to. |

Note: Inherits `align`, `offset`, `visible` from [`Tooltip`](../../base/components/tooltip.md).

## Methods

| Name     | Description        |
| -------- | ------------------ |
| `show()` | Shows the tooltip. |
| `hide()` | Hides the tooltip. |
