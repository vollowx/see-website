---
title: Menu - SEE
---

# Menu

- Mixes: [`InternalsAttached`](/base/mixins/internals-attached/)
- Mixes: [`Attachable`](/base/mixins/attachable/)

Base menu component for dropdown and popup menus.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`open`|Boolean|`false`|Whether the menu is open.|
|`quick`|Boolean|`false`|Whether to skip open/close animations.|
|`align`|String|`'bottom-start'`|Menu alignment relative to trigger (e.g., 'top', 'bottom-start').|
|`alignStrategy`|String|`'absolute'`|Positioning strategy ('absolute' or 'fixed').|
|`offset`|Number|`0`|Offset from the trigger element in pixels.|
|`keepOpenBlur`|Boolean|`false`|Whether to keep menu open when focus is lost.|
|`keepOpenClickItem`|Boolean|`false`|Whether to keep menu open when an item is clicked.|
|`keepOpenClickOutside`|Boolean|`false`|Whether to keep menu open when clicking outside.|

## Events

|Name|Type|Description|
|---|---|---|
|`select`|Event|Fired when a menu item has been selected.|

## Methods

Inherits all standard HTMLElement methods.
