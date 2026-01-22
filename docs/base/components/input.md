---
title: Input - Base - SEE
---

# Input

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

Base input component for text-based form inputs.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`type`|String|`'text'`|The input type (text, email, password, etc.).|
|`value`|String|`''`|The current value of the input.|
|`placeholder`|String|`''`|Placeholder text displayed when input is empty.|
|`required`|Boolean|`false`|Whether the input is required for form submission.|
|`readOnly`|Boolean|`false`|Whether the input is read-only.|
|`multiple`|Boolean|`false`|Whether the input accepts multiple values (e.g., email).|
|`min`|String|`''`|Minimum value for numeric or date inputs.|
|`max`|String|`''`|Maximum value for numeric or date inputs.|
|`step`|String|`''`|Step interval for numeric inputs.|
|`minLength`|Number|`-1`|Minimum length for text inputs.|
|`maxLength`|Number|`-1`|Maximum length for text inputs.|
|`pattern`|String|`''`|Regular expression pattern for validation.|
|`autocomplete`|String|`''`|Autocomplete hint for the browser.|
|`disabled`|Boolean|`false`|Whether the input is disabled (inherited from FormAssociated).|

## Methods

Inherits all standard HTMLElement and input methods.
