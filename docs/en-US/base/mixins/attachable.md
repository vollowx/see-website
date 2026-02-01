---
title: Attachable - Base - SEELE
---

# Attachable

- Accepts: classes inheriting [`LitElement`](https://lit.dev/docs/api/LitElement/)

The Attachable mixin enables elements to attach to and control other elements via the `for` attribute or parent relationship.

## Properties

| Name       | Type                | Description                                                                                                           |
| ---------- | ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `htmlFor`  | String              | The ID of the control element to attach to. When set, the element attaches to the element with this ID.               |
| `$control` | HTMLElement \| null | Getter/setter for the control element. If `for` attribute is set, finds element by ID. Otherwise uses parent element. |

## Methods

| Name                              | Description                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `attach(control, force?)`         | Attach to a specific control element. The optional `force` parameter forces reattachment if set to true. |
| `detach()`                        | Detach from the current control element.                                                                  |
| `handleControlChange(prev, next)` | Hook method called when control changes. Override to handle control changes.                              |
