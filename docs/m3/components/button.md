---
title: Button - M3 - SEE
---

# Button

<ul id="toc"></ul>

## Action Button

- Follows: [Buttons - Material Design 3](https://m3.material.io/components/buttons/overview)
- Inherits: [`Button`](../../base/components/button.md)

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-button id="button-interactive">
    <md-icon slot="icon">search</md-icon>
    <span>Controlled</span>
  </md-button>

  <label slot="controls" for="button-properties-label">
    Label
    <md-outlined-text-field id="button-properties-label" value="Controlled"></md-outlined-text-field>
  </label>

  <label slot="controls" for="button-properties-size">
    Size
    <md-outlined-select name="size" id="button-properties-size" value="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-shape">
    Shape
    <md-outlined-select name="shape" id="button-properties-shape" value="rounded">
      <md-option value="rounded">rounded</md-option>
      <md-option value="square">square</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-variant">
    Variant
    <md-outlined-select name="variant" id="button-properties-variant" value="filled">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="elevated">elevated</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-color">
    Color
    <md-outlined-select name="color" id="button-properties-color" value="primary">
      <md-option value="primary">primary</md-option>
      <md-option value="secondary">secondary</md-option>
      <md-option value="tertiary">tertiary</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-disabled">
    Disabled
    <md-switch id="button-properties-disabled"></md-switch>
  </label>

  <label slot="controls" for="button-properties-trailingIcon">
    Trailing Icon
    <md-switch id="button-properties-trailingIcon"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

Note: `color` is not part of the official Material Design 3. Color of tonal buttons is always secondary container. Color of outlined buttons is always on outline variant.

### Configurations

#### Varients

<!-- @docs-demo-code-block -->
```html
<md-button>Filled</md-button>
<md-button variant="tonal">Tonal</md-button>
<md-button variant="elevated">
  <md-icon slot="icon">search</md-icon>
  Elevated
</md-button>
<md-button variant="outlined">Outlined</md-button>
<md-button variant="text">Text</md-button>
```

#### Icon

<!-- @docs-demo-code-block -->
```html
<md-button variant="tonal">
  Send
  <md-icon slot="icon">send</md-icon>
</md-button>

<md-button variant="text" trailingicon>
  Open
  <md-icon slot="icon">open_in_new</md-icon>
</md-button>
```

### Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`color`|`'primary' \| 'secondary' \| 'tertiary'`|`'primary'`|The color variant of the button.|
|`shape`|`'rounded' \| 'square'`|`'rounded'`|The shape of the button.|
|`size`|`'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`|`'small'`|The size of the button.|
|`trailingIcon`|Boolean|`false`|Whether the icon is displayed at the end of the button.|
|`variant`|`'filled' \| 'tonal' \| 'elevated' \| 'outlined' \| 'text'`|`'filled'`|The visual style variant of the button.|
|`type`|`'button' \| 'submit' \| 'reset'`|`'button'`|The button type (inherited from `Button`).|
|`disabled`|Boolean|`false`|Whether the button is disabled (inherited from `FormAssociated`).|

### Methods

Inherits all standard HTMLElement methods. Use `click()` to programmatically trigger the button.

## Toggle Button

- Inherits: [`Switch`](../../base/components/switch.md)

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-button-toggle id="button-toggle-interactive">
    <md-icon slot="icon">bookmark</md-icon>
    <md-icon slot="icon-checked" style="font-variation-settings: 'FILL' 1">bookmark</md-icon>
    <span>Bookmark</span>
    <span slot="checked">Bookmarked</span>
  </md-button-toggle>

  <label slot="controls" for="button-toggle-properties-variant">
    Variant
    <md-outlined-select name="variant" id="button-toggle-properties-variant" value="filled">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="elevated">elevated</md-option>
      <md-option value="outlined">outlined</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-shape">
    Shape
    <md-outlined-select name="shape" id="button-toggle-properties-shape" value="rounded">
      <md-option value="rounded">rounded</md-option>
      <md-option value="square">square</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-size">
    Size
    <md-outlined-select name="size" id="button-toggle-properties-size" value="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-color">
    Color
    <md-outlined-select name="color" id="button-toggle-properties-color" value="primary">
      <md-option value="primary">primary</md-option>
      <md-option value="secondary">secondary</md-option>
      <md-option value="tertiary">tertiary</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-disabled">
    Disabled
    <md-switch id="button-toggle-properties-disabled"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### Usage

<!-- @docs-demo-code-block -->
```html
<div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
  <md-icon-button variant="tonal" width="narrow" aria-label="Pause">
    <md-icon>pause</md-icon>
  </md-icon-button>
  <md-button-toggle size="medium" checked>
    <span>Stop</span>
    <span slot="checked">Start</span>
  </md-button-toggle>
  <md-icon-button variant="outlined" width="narrow" aria-label="Restart">
    <md-icon>replay</md-icon>
  </md-icon-button>
</div>
```

### Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|Boolean|`false`|Whether the button is in the checked state (inherited from `Switch`).|
|`color`|`'primary' \| 'secondary' \| 'tertiary'`|`'primary'`|The color variant of the button.|
|`shape`|`'rounded' \| 'square'`|`'rounded'`|The shape of the button.|
|`size`|`'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`|`'small'`|The size of the button.|
|`trailingIcon`|Boolean|`false`|Whether the icon is displayed at the end of the button.|
|`variant`|`'filled' \| 'tonal' \| 'elevated' \| 'outlined'`|`'filled'`|The visual style variant of the button.|
|`type`|`'button' \| 'submit' \| 'reset'`|`'button'`|The button type (inherited from `Button`).|
|`disabled`|Boolean|`false`|Whether the button is disabled (inherited from `FormAssociated`).|

### Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|
