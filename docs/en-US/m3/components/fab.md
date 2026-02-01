---
title: Fab - M3 - SEELE
---

# Floating action button (FAB)

Floating action buttons (FABs) help people take primary actions.

- Follows: [FABs - Material Design 3](https://m3.material.io/components/floating-action-button/overview)
- Inherits: [`Button`](../../base/classes/button.md)

## Types

<!-- @docs-demo-code-block -->

```html
<md-fab aria-label="Accessibility">
  <iconify-icon icon="material-symbols:accessible-forward"></iconify-icon>
</md-fab>
<md-fab size="medium" color="secondary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab size="large" color="tertiary" aria-label="Color palette">
  <iconify-icon icon="material-symbols:palette"></iconify-icon>
</md-fab>
```

### Extended FAB

<!-- @docs-demo-code-block -->

```html
<md-fab>
  <iconify-icon icon="material-symbols:navigation"></iconify-icon>
  <span slot="label">Navigation</span>
</md-fab>
<md-fab><span slot="label">Reroute</span></md-fab>
```

## Usage

FABs should have an icon, such as a font `iconify-icon`, an `svg`, or an `img`.

<!-- @docs-demo-code-block -->

```html
<md-fab aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### Colors

FAB colors may be changed with the `color` attribute. It can be set to
"surface", "primary" (default), "secondary", "tertiary", "primary-container",
"secondary-container" or "tertiary-container".

<!-- @docs-demo-code-block -->

```html
<md-fab color="primary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab color="secondary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab color="tertiary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>

<br />

<md-fab color="primary-container" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab color="secondary-container" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab color="tertiary-container" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### Sizes

FABs may be default, medium, or large by setting the `size` attribute.

<!-- @docs-demo-code-block -->

```html
<md-fab aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab aria-label="Edit" size="medium">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab aria-label="Edit" size="large">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

## Accessibility

Icon-only FABs must include an `aria-label` that describes its action. Otherwise if `aria-label` is not provided, the FAB will default to announcing its visible contents.

Extended FABs use their `label` for accessibility. Add an `aria-label` for additional context if needed. By supplying the `label` attribute, the extended FAB will make sure that the icon is not announced.

## Properties

| Name    | Type                                                                                                                          | Default     | Description           |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------- | --------------------- |
| `size`  | `'default' \| 'medium' \| 'large'`                                                                                            | `'default'` | The size of the FAB.  |
| `color` | `'surface' \| 'primary' \| 'secondary' \| 'tertiary' \| 'primary-container' \| 'secondary-container' \| 'tertiary-container'` | `'surface'` | The color of the FAB. |
