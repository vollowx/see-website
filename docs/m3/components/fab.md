---
title: Fab - SEE
---

# Floating action button (FAB)

<ul id="toc"></ul>

## Types

<sw-demo>
  <md-fab color="primary" aria-label="Accessibility">
    <md-icon>accessible_forward</md-icon>
  </md-fab>
  <md-fab size="small" color="tertiary" aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
  <md-fab size="large" aria-label="Color palette">
    <md-icon>palette</md-icon>
  </md-fab>
</sw-demo>

### Extended FAB

<sw-demo>
  <md-fab>
    <md-icon>navigation</md-icon>
    <span slot="label">Navigation</span>
  </md-fab>
  <md-fab><span slot="label">Reroute</span></md-fab>
</sw-demo>

## Usage

FABs should have an icon, such as a font `md-icon`, an `svg`, or an `img`.

<sw-demo>
  <md-fab aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
</sw-demo>

### Lowered

FABs can be set to a lower elevation with the `lowered` attribute.

<sw-demo>
  <md-fab lowered aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
</sw-demo>

### Colors

FAB colors may be changed with the `color` attribute. It can be set to "surface" (default), "primary", "secondary", or "tertiary".

<sw-demo>
  <md-fab color="primary" aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
  <md-fab color="secondary" aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
  <md-fab color="tertiary" aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
</sw-demo>

### Sizes

FABs may be small, medium (default), or large by setting the `size` attribute.

<sw-demo>
  <md-fab size="small" aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
  <md-fab aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
  <md-fab size="large" aria-label="Edit">
    <md-icon>edit</md-icon>
  </md-fab>
</sw-demo>

## Accessibility

Icon-only FABs must include an `aria-label` that describes its action. Otherwise if `aria-label` is not provided, the FAB will default to announcing its visible contents.

Extended FABs use their `label` for accessibility. Add an `aria-label` for additional context if needed. By supplying the `label` attribute, the extended FAB will make sure that the icon is not announced.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`size`|`'small' \| 'medium' \| 'large'`|`'medium'`|The size of the FAB.|
|`color`|`'surface' \| 'primary' \| 'secondary' \| 'tertiary'`|`'surface'`|The color variant of the FAB.|
|`lowered`|`boolean`|`false`|Whether the FAB has lowered elevation.|
|`type`|`'button' \| 'submit' \| 'reset'`|`'button'`|The button type (inherited from base Button).|
|`disabled`|`boolean`|`false`|Whether the FAB is disabled (inherited from FormAssociated).|

## Methods

Inherits all standard HTMLElement methods. Use `click()` to programmatically trigger the FAB.
