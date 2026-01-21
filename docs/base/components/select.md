---
title: Select - SEE
---

# Select

- Mixes: [`InternalsAttached`](/base/mixins/internals-attached/)
- Mixes: [`FormAssociated`](/base/mixins/form-associated/)

Base select component for dropdown selection controls.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`value`|String|`''`|The selected value.|
|`displayValue`|String|`''`|The display text for the selected value.|
|`placeholder`|String|`''`|Placeholder text when no value is selected.|
|`open`|Boolean|`false`|Whether the dropdown menu is open.|
|`required`|Boolean|`false`|Whether a selection is required for form submission.|
|`disabled`|Boolean|`false`|Whether the select is disabled (inherited from FormAssociated).|

## Events

|Name|Type|Description|
|---|---|---|
|`change`|Event|Fired when the selected value has changed.|
|`input`|Event|Fired when the selected value has changed.|
|`select`|Event|Fired when a menu item has been selected.|

## Methods

Inherits all standard HTMLElement methods.
