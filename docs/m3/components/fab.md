---
title: Fab - M3 - SEELE
---

# Floating action button (FAB)

Floating action buttons (FABs) help people take primary actions.

- Follows: [FABs - Material Design 3](https://m3.material.io/components/floating-action-button/overview)
- Inherits: [`Button`](../../base/components/button.md)

## Types

<!-- @docs-demo-code-block -->

```html
<md-fab color="primary" aria-label="Accessibility">
  <iconify-icon icon="material-symbols:accessible-forward"></iconify-icon>
</md-fab>
<md-fab size="small" color="tertiary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab size="large" aria-label="Color palette">
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

### Lowered

FABs can be set to a lower elevation with the `lowered` attribute.

<!-- @docs-demo-code-block -->

```html
<md-fab lowered aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### Colors

FAB colors may be changed with the `color` attribute. It can be set to "surface" (default), "primary", "secondary", or "tertiary".

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
```

### Sizes

FABs may be small, medium (default), or large by setting the `size` attribute.

<!-- @docs-demo-code-block -->

```html
<md-fab size="small" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab size="large" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

## Accessibility

Icon-only FABs must include an `aria-label` that describes its action. Otherwise if `aria-label` is not provided, the FAB will default to announcing its visible contents.

Extended FABs use their `label` for accessibility. Add an `aria-label` for additional context if needed. By supplying the `label` attribute, the extended FAB will make sure that the icon is not announced.

## Properties

| Name      | Type                                                  | Default     | Description                            |
| --------- | ----------------------------------------------------- | ----------- | -------------------------------------- |
| `size`    | `'small' \| 'medium' \| 'large'`                      | `'medium'`  | The size of the FAB.                   |
| `color`   | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'surface'` | The color variant of the FAB.          |
| `lowered` | Boolean                                               | `false`     | Whether the FAB has lowered elevation. |

Note: Inherits `type` from [`Button`](../../base/components/button.md) and `disabled` from [`FormAssociated`](../../base/mixins/form-associated.md).

## Methods

Inherits all standard HTMLElement methods. Use `click()` to programmatically trigger the FAB.
