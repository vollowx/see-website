---
title: ListItem - Base - SEE
---

# ListItem

- Mixes: [`InternalsAttached`](/base/mixins/internals-attached/)
- Mixes: [`FormAssociated`](/base/mixins/form-associated/)

Base list item component for interactive list items in menus and selects.

Since `ariaActiveDescendant` is used, list items are not actually focused, instead,
use `:state(focused)` in CSS or handle custom behaviors by overriding `changed()`.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`selected`|Boolean|`false`|Whether the list item is selected.|
|`focused`|Boolean|`false`|Whether the list item has focus.|
|`disabled`|Boolean|`false`|Whether the list item is disabled (inherited from FormAssociated).|

## Methods

|Name|Description|
|---|---|
|`focus()`|Visually sets the focused state to true.|
|`blur()`|Visually sets the focused state to false.|
