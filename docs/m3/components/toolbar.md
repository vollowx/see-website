---
title: Toolbar - SEE
---

# Toolbar

<ul id="toc"></ul>

Toolbars display frequently used actions relevant to the current page or context and group controls into a compact surface.

- Mixes: [`InternalsAttached`](/base/mixins/internals-attached/)

## Types

<sw-demo>
  <md-toolbar>
    <md-icon-button aria-label="Back">
      <md-icon>arrow_back</md-icon>
    </md-icon-button>
    <md-icon-button aria-label="Forward">
      <md-icon>arrow_forward</md-icon>
    </md-icon-button>
    <md-icon-button size="small" variant="filled" shape="square" aria-label="New tab">
      <md-icon>add</md-icon>
    </md-icon-button>
    <md-icon-button aria-label="Tabs">
      <md-icon>tab</md-icon>
    </md-icon-button>
    <md-icon-button aria-label="More options">
      <md-icon>more_vert</md-icon>
    </md-icon-button>
  </md-toolbar>
</sw-demo>

#### Floating

<sw-demo>
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
</sw-demo>

#### Vertical (Floating Only)

<sw-demo>
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
</sw-demo>

#### With FAB

<sw-demo>
  <md-toolbar type="floating">
    <md-icon-button id="toolbar-archive">
      <md-icon>archive</md-icon>
    </md-icon-button>
    <md-tooltip for="toolbar-archive">Archive</md-tooltip>
    <md-icon-button id="toolbar-delete">
      <md-icon>delete</md-icon>
    </md-icon-button>
    <md-tooltip for="toolbar-delete">Delete</md-tooltip>
    <md-icon-button id="toolbar-mail">
      <md-icon>mail</md-icon>
    </md-icon-button>
    <md-tooltip for="toolbar-mail">Mail</md-tooltip>
    <md-icon-button id="toolbar-snooze">
      <md-icon>snooze</md-icon>
    </md-icon-button>
    <md-tooltip for="toolbar-snooze">Snooze</md-tooltip>
    <md-icon-button id="toolbar-more-mailboxes">
      <md-icon>more_vert</md-icon>
    </md-icon-button>
    <md-tooltip for="toolbar-more-mailboxes">More mailboxes</md-tooltip>
    <md-fab slot="fab" color="tertiary" id="toolbar-reply">
      <md-icon>reply</md-icon>
    </md-fab>
    <md-tooltip for="toolbar-reply">Reply</md-tooltip>
  </md-toolbar>
</sw-demo>

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`type`|`'docked' \| 'floating'`|`'docked'`|The visual style type of the toolbar.|
|`color`|`string`|`'standard'`|The color variant of the toolbar.|
|`orientation`|`'horizontal' \| 'vertical'`|`'horizontal'`|The orientation of the toolbar (only for floating type).|
