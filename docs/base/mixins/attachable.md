---
title: Attachable - Base - SEELE
---

# Attachable

- Accepts: classes inheriting `LitElement`

The Attachable mixin enables elements to attach to and control other elements via the `for` attribute or parent relationship.

## Properties

|Name|Type|Description|
|---|---|---|
|`htmlFor`|String|The ID of the control element to attach to. When set, the element attaches to the element with this ID.|
|`currentControl`|HTMLElement \| null|Reference to the currently attached control element.|
|`$control`|HTMLElement \| null|Getter/setter for the control element. If `for` attribute is set, finds element by ID. Otherwise uses parent element.|

## Methods

|Name|Description|
|---|---|
|`attach(control)`|Attach to a specific control element.|
|`detach()`|Detach from the current control element.|
|`setCurrentControl(control)`|Internal method to update the current control.|
|`handleControlChange(prev, next)`|Hook method called when control changes. Override to handle control changes.|
