---
title: Checkbox - Base - SEE
---

# Checkbox

- Mixes: [`InternalsAttached`](/base/mixins/internals-attached/)
- Mixes: [`FormAssociated`](/base/mixins/form-associated/)

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|Boolean|`false`|Whether the checkbox is checked.|
|`indeterminate`|Boolean|`false`|Whether the checkbox is in an indeterminate state.|
|`required`|Boolean|`false`|Whether the checkbox is required for form submission.|
|`disabled`|Boolean|`false`|Whether the checkbox is disabled (inherited from FormAssociated).|

## Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|

## Methods

Inherits all standard HTMLElement methods.
