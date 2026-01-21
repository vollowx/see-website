---
title: Tooltip - SEE
---

# Tooltip

<ul id="toc"></ul>

Tooltips display informative text when users hover over, focus on, or tap an element.

- Follows: [Tooltips - Material Design 3](https://m3.material.io/components/tooltips/overview)
- Inherits: [`Tooltip`](/base/components/tooltip/)

<sw-demo>
  <md-icon-button id="tooltip-anchor">
    <md-icon>search</md-icon>
  </md-icon-button>
  <md-tooltip for="tooltip-anchor">Search for contact</md-tooltip>
  <md-icon-button id="tooltip-anchor-2">
    <md-icon>settings</md-icon>
  </md-icon-button>
  <md-tooltip for="tooltip-anchor-2">Settings</md-tooltip>
  <md-button id="tooltip-anchor-3">
    Max Width
    <md-icon slot="icon">width</md-icon>
  </md-button>
  <md-tooltip for="tooltip-anchor-3">Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. Praesent non nunc mollis, fermentum neque at, semper arcu. Nullam eget est sed sem iaculis gravida eget vitae justo.</md-tooltip>
</sw-demo>

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`align`|`string`|`'top'`|The alignment of the tooltip relative to the anchor element (inherited from Tooltip).|
|`offset`|`number`|`4`|The offset distance from the anchor element (inherited from Tooltip).|
|`for`|`string`|`''`|The ID of the element that the tooltip is attached to.|

## Methods

|Name|Description|
|---|---|
|`show()`|Shows the tooltip.|
|`hide()`|Hides the tooltip.|
