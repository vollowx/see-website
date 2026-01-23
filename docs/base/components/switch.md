---
title: Switch - Base - SEELE
---

# Switch

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|Boolean|`false`|Whether the switch is in the checked/on state.|
|`disabled`|Boolean|`false`|Whether the switch is disabled (inherited from `FormAssociated`).|

## Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|

## Methods

Inherits all standard HTMLElement methods.
