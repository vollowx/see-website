---
title: Switch - M3 - SEE
---

# Switch

<ul id="toc"></ul>

Switches are the preferred way to adjust settings. They're used to control binary options – think On/Off or True/False.

- Follows: [Switches - Material Design 3](https://m3.material.io/components/switch/overview)
- Inherits: [`Switch`](../../base/components/switch.md)

## Interactive Demo

<sw-demo hascontrols>
  <label for="switch-interactive">
    <md-switch id="switch-interactive"></md-switch>
    Controlled
  </label>

  <label slot="controls" for="switch-properties-checked">
    Checked
    <md-switch id="switch-properties-checked"></md-switch>
  </label>
  <label slot="controls" for="switch-properties-disabled">
    Disabled
    <md-switch id="switch-properties-disabled"></md-switch>
  </label>
  <label slot="controls" for="switch-properties-icons">
    Icons
    <md-switch id="switch-properties-icons"></md-switch>
  </label>
  <label slot="controls" for="switch-properties-checkedIconOnly">
    Checked Icon Only
    <md-switch id="switch-properties-checkedIconOnly"></md-switch>
  </label>
</sw-demo>

### Usage

Switches may be standalone or pre-checked.

<sw-demo>
  <md-switch aria-label="unchecked switch"></md-switch>
  <md-switch aria-label="pre-checked switch" checked></md-switch>
</sw-demo>

#### Icons

Icons can be used to visually emphasize the switch's selected state. Switches can choose to display both icons or only selected icons.

<sw-demo>
  <md-switch icons></md-switch>
  <md-switch icons checked></md-switch>

  <md-switch icons checkedicononly></md-switch>
  <md-switch icons checkedicononly checked></md-switch>
</sw-demo>

#### Label

Associate a label with a checkbox using the `<label>` element.

<sw-demo>
  <label>
    Wi-Fi
    <md-switch checked></md-switch>
  </label>

  <label for="switch-bluetooth">Bluetooth</label>
  <md-switch id="switch-bluetooth"></md-switch>
</sw-demo>

### Accessibility

Add an `aria-label` attribute to switches without labels or switches whose labels need to be more descriptive.

<sw-demo>
  <md-switch aria-label="Lights"></md-switch>

  <label>
    All
    <md-switch aria-label="All notifications"></md-switch>
  </label>
</sw-demo>

Note: switches are not automatically labelled by `<label>` elements and always need an `aria-label`.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|`boolean`|`false`|Whether the switch is checked (inherited from Switch).|
|`icons`|`boolean`|`false`|Whether to display icons in the switch thumb.|
|`checkedIconOnly`|`boolean`|`false`|Whether to display the icon only when checked.|
|`disabled`|`boolean`|`false`|Whether the switch is disabled (inherited from FormAssociated).|

## Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|
