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
    <md-icon>arrow_back</md-icon>
  </md-icon-button>
  <md-icon-button aria-label="Forward">
    <md-icon>arrow_forward</md-icon>
  </md-icon-button>
  <md-icon-button variant="filled" shape="square" aria-label="New tab">
    <md-icon>add</md-icon>
  </md-icon-button>
  <md-icon-button aria-label="Tabs">
    <md-icon>tab</md-icon>
  </md-icon-button>
  <md-icon-button aria-label="More options">
    <md-icon>more_vert</md-icon>
  </md-icon-button>
</md-toolbar>
```

### Floating

<!-- @docs-demo-code-block -->

```html
<md-toolbar type="floating">
  <md-icon-button-toggle variant="tonal" checked>
    <md-icon aria-label="Unchecked">format_bold</md-icon>
    <md-icon slot="checked" aria-label="Checked">format_bold</md-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <md-icon aria-label="Unchecked">format_italic</md-icon>
    <md-icon slot="checked" aria-label="Checked">format_italic</md-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <md-icon aria-label="Unchecked">format_underlined</md-icon>
    <md-icon slot="checked" aria-label="Checked">format_underlined</md-icon>
  </md-icon-button-toggle>
  <md-button>Share</md-button>
</md-toolbar>
```

#### Vertical

<!-- @docs-demo-code-block -->

```html
<md-toolbar type="floating" orientation="vertical">
  <md-icon-button-toggle variant="tonal">
    <md-icon aria-label="Unchecked">format_bold</md-icon>
    <md-icon slot="checked" aria-label="Checked">format_bold</md-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <md-icon aria-label="Unchecked">format_italic</md-icon>
    <md-icon slot="checked" aria-label="Checked">format_italic</md-icon>
  </md-icon-button-toggle>
  <md-icon-button-toggle variant="tonal">
    <md-icon aria-label="Unchecked">format_underlined</md-icon>
    <md-icon slot="checked" aria-label="Checked">format_underlined</md-icon>
  </md-icon-button-toggle>
</md-toolbar>
```

#### With FAB

<!-- @docs-demo-code-block -->

```html
<md-toolbar type="floating">
  <md-icon-button id="toolbar-archive">
    <md-icon>archive</md-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-delete">
    <md-icon>delete</md-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-mail">
    <md-icon>mail</md-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-snooze">
    <md-icon>snooze</md-icon>
  </md-icon-button>
  <md-icon-button id="toolbar-more-mailboxes">
    <md-icon>more_vert</md-icon>
  </md-icon-button>

  <md-tooltip offset="16" for="toolbar-archive">Archive</md-tooltip>
  <md-tooltip offset="16" for="toolbar-delete">Delete</md-tooltip>
  <md-tooltip offset="16" for="toolbar-mail">Mail</md-tooltip>
  <md-tooltip offset="16" for="toolbar-snooze">Snooze</md-tooltip>
  <md-tooltip offset="16" for="toolbar-more-mailboxes"
    >More mailboxes</md-tooltip
  >

  <md-fab slot="fab" color="tertiary" id="toolbar-reply">
    <md-icon>reply</md-icon>
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
