---
title: Icon Button - M3 - SEE
---

# Icon button

<ul id="toc"></ul>

## Action Button

- Follows: [Icon Buttons - Material Design 3](https://m3.material.io/components/icon-buttons/overview)
- Inherits: [`Button`](../../base/components/button.md)

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-icon-button id="icon-button-interactive">
    <md-icon>settings</md-icon>
  </md-icon-button>

  <label slot="controls" for="icon-button-properties-size">
    Size
    <md-outlined-select name="size" id="icon-button-properties-size" value="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-properties-variant">
    Variant
    <md-outlined-select name="variant" id="icon-button-properties-variant" value="text">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-properties-width">
    Width
    <md-outlined-select name="width" id="icon-button-properties-width" value="standard">
      <md-option value="standard">standard</md-option>
      <md-option value="narrow">narrow</md-option>
      <md-option value="wide">wide</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-properties-disabled">
    Disabled
    <md-switch id="icon-button-properties-disabled"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`size`|`'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`|`'small'`|The size of the icon button.|
|`variant`|`'filled' \| 'tonal' \| 'outlined' \| 'text'`|`'text'`|The visual style variant of the icon button.|
|`width`|`'standard' \| 'narrow' \| 'wide'`|`'standard'`|The width variant of the icon button.|
|`type`|`'button' \| 'submit' \| 'reset'`|`'button'`|The button type (inherited from `Button`).|
|`disabled`|Boolean|`false`|Whether the icon button is disabled (inherited from `FormAssociated`).|

### Methods

Inherits all standard HTMLElement methods. Use `click()` to programmatically trigger the button.

### Types

<!-- @docs-demo-code-block -->
```html
<md-icon-button variant="filled"><md-icon>settings</md-icon></md-icon-button>
<md-icon-button variant="tonal"><md-icon>settings</md-icon></md-icon-button>
<md-icon-button variant="outlined"><md-icon>settings</md-icon></md-icon-button>
<md-icon-button variant="text"><md-icon>settings</md-icon></md-icon-button>
```

## Toggle Button

- Inherits: [`Switch`](../../base/components/switch.md)

Icon buttons can be used to select between two states.

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-icon-button-toggle id="icon-button-toggle-interactive">
    <md-icon>favorite</md-icon>
    <md-icon slot="checked" style="font-variation-settings: 'FILL' 1">favorite</md-icon>
  </md-icon-button-toggle>

  <label slot="controls" for="icon-button-toggle-properties-variant">
    Variant
    <md-outlined-select name="variant" id="icon-button-toggle-properties-variant" value="text">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-toggle-properties-size">
    Size
    <md-outlined-select name="size" id="icon-button-toggle-properties-size" value="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-toggle-properties-width">
    Width
    <md-outlined-select name="width" id="icon-button-toggle-properties-width" value="standard">
      <md-option value="standard">standard</md-option>
      <md-option value="narrow">narrow</md-option>
      <md-option value="wide">wide</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-toggle-properties-disabled">
    Disabled
    <md-switch id="icon-button-toggle-properties-disabled"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|Boolean|`false`|Whether the icon button is in the checked state (inherited from `Switch`).|
|`size`|`'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`|`'small'`|The size of the icon button toggle.|
|`variant`|`'filled' \| 'tonal' \| 'outlined' \| 'text'`|`'text'`|The visual style variant of the icon button toggle.|
|`width`|`'standard' \| 'narrow' \| 'wide'`|`'standard'`|The width variant of the icon button toggle.|
|`disabled`|Boolean|`false`|Whether the icon button toggle is disabled (inherited from `FormAssociated`).|

### Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|

### Types

<!-- @docs-demo-code-block -->
```html
<md-icon-button-toggle variant="filled">
  <md-icon>favorite</md-icon>
  <md-icon slot="checked" style="font-variation-settings: 'FILL' 1">favorite</md-icon>
</md-icon-button-toggle>
<md-icon-button-toggle variant="tonal">
  <md-icon>favorite</md-icon>
  <md-icon slot="checked" style="font-variation-settings: 'FILL' 1">favorite</md-icon>
</md-icon-button-toggle>
<md-icon-button-toggle variant="outlined">
  <md-icon>favorite</md-icon>
  <md-icon slot="checked" style="font-variation-settings: 'FILL' 1">favorite</md-icon>
</md-icon-button-toggle>
<md-icon-button-toggle variant="text">
  <md-icon>favorite</md-icon>
  <md-icon slot="checked" style="font-variation-settings: 'FILL' 1">favorite</md-icon>
</md-icon-button-toggle>
```
