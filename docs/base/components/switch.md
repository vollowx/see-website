---
title: Switch - Base - SEE
---

# Switch

- Mixes: [`InternalsAttached`](/base/mixins/internals-attached/)
- Mixes: [`FormAssociated`](/base/mixins/form-associated/)

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|Boolean|`false`|Whether the switch is in the checked/on state.|
|`disabled`|Boolean|`false`|Whether the switch is disabled (inherited from FormAssociated).|

## Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|

## Methods

Inherits all standard HTMLElement methods.
