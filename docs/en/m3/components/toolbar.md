---
title: Toolbar - M3 - SEELE
---

# Toolbar

Toolbars display frequently used actions relevant to the current page or context and group controls into a compact surface.

- Mixes: [`InternalsAttached`](../../base/mixins/internals-attached.md)

## Types

<!-- @docs-demo-code-block -->

```html
<md-toolbar>
  <md-icon-button aria-label="Back">
    <iconify-icon icon="material-symbols:arrow-back"></iconify-icon>
  </md-icon-button>
  <md-icon-button aria-label="Forward">
    <iconify-icon icon="material-symbols:arrow-forward"></iconify-icon>
  </md-icon-button>
  <md-icon-button variant="filled" shape="square" aria-label="New tab">
    <iconify-icon icon="material-symbols:add"></iconify-icon>
  </md-icon-button>
  <md-icon-button aria-label="Tabs">
    <iconify-icon icon="material-symbols:tab"></iconify-icon>
  </md-icon-button>
  <md-icon-button aria-label="More options">
    <iconify-icon icon="material-symbols:more-vert"></iconify-icon>
  </md-icon-button>
</md-toolbar>
```

### Floating

<!-- @docs-demo-code-block -->

```html
<md-toolbar type="floating">
  <md-icon-button-toggle variant="tonal" checked>
    <iconify-icon aria-label="Unchecked" icon="material-symbols:format-bold"></iconify-icon>
    <iconify-icon slot="checked" aria-label="Checked" icon="material-symbols:format-bold"></iconify-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <iconify-icon aria-label="Unchecked" icon="material-symbols:format-italic"></iconify-icon>
    <iconify-icon slot="checked" aria-label="Checked" icon="material-symbols:format-italic"></iconify-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <iconify-icon aria-label="Unchecked" icon="material-symbols:format-underlined"></iconify-icon>
    <iconify-icon slot="checked" aria-label="Checked" icon="material-symbols:format-underlined"></iconify-icon>
  </md-icon-button-toggle>
  <md-button>Share</md-button>
</md-toolbar>
```

#### Vertical

<!-- @docs-demo-code-block -->

```html
<md-toolbar type="floating" orientation="vertical">
  <md-icon-button-toggle variant="tonal">
    <iconify-icon aria-label="Unchecked" icon="material-symbols:format-bold"></iconify-icon>
    <iconify-icon slot="checked" aria-label="Checked" icon="material-symbols:format-bold"></iconify-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <iconify-icon aria-label="Unchecked" icon="material-symbols:format-italic"></iconify-icon>
    <iconify-icon slot="checked" aria-label="Checked" icon="material-symbols:format-italic"></iconify-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <iconify-icon aria-label="Unchecked" icon="material-symbols:format-underlined"></iconify-icon>
    <iconify-icon slot="checked" aria-label="Checked" icon="material-symbols:format-underlined"></iconify-icon>
  </md-icon-button-toggle>
</md-toolbar>
```

#### With FAB

<!-- @docs-demo-code-block -->

```html
<md-toolbar type="floating">
  <md-icon-button id="toolbar-archive">
    <iconify-icon icon="material-symbols:archive"></iconify-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-delete">
    <iconify-icon icon="material-symbols:delete"></iconify-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-mail">
    <iconify-icon icon="material-symbols:mail"></iconify-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-snooze">
    <iconify-icon icon="material-symbols:snooze"></iconify-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-more-mailboxes">
    <iconify-icon icon="material-symbols:more-vert"></iconify-icon>
  </md-icon-button>

  <md-tooltip offset="16" for="toolbar-archive">Archive</md-tooltip>
  <md-tooltip offset="16" for="toolbar-delete">Delete</md-tooltip>
  <md-tooltip offset="16" for="toolbar-mail">Mail</md-tooltip>
  <md-tooltip offset="16" for="toolbar-snooze">Snooze</md-tooltip>
  <md-tooltip offset="16" for="toolbar-more-mailboxes"
    >More mailboxes</md-tooltip
  >

  <md-fab slot="fab" color="tertiary" id="toolbar-reply">
    <iconify-icon icon="material-symbols:reply"></iconify-icon>
  </md-fab>

  <md-tooltip offset="8" for="toolbar-reply">Reply</md-tooltip>
</md-toolbar>
```

## Properties

| Name          | Type                         | Default        | Description                                              |
| ------------- | ---------------------------- | -------------- | -------------------------------------------------------- |
| `type`        | `'docked' \| 'floating'`     | `'docked'`     | The visual style type of the toolbar.                    |
| `color`       | `'standard' \| 'vibrant'`    | `'standard'`   | The color variant of the toolbar.                        |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | The orientation of the toolbar (only for floating type). |
