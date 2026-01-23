---
title: Text Field - M3 - SEE
---

# Text Field

<ul id="toc"></ul>

Text fields let users enter text into a UI.

- Follows: [Text Fields - Material Design 3](https://m3.material.io/components/text-fields/overview)
- Inherits: [`Input`](../../base/components/input.md)

<!-- @docs-demo-code-block -->
```html
<md-outlined-text-field label="Labelled" placeholder="Placeholder"></md-outlined-text-field>
<md-filled-text-field label="Labelled" placeholder="Placeholder"></md-filled-text-field>
```

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`label`|String|`''`|The label text for the text field.|
|`supportingText`|String|`''`|Helper text displayed below the text field.|
|`type`|String|`'text'`|The input type (inherited from `Input`).|
|`value`|String|`''`|The current value of the text field (inherited from `Input`).|
|`placeholder`|String|`''`|The placeholder text when the field is empty (inherited from `Input`).|
|`required`|Boolean|`false`|Whether the text field is required (inherited from `Input`).|
|`readOnly`|Boolean|`false`|Whether the text field is read-only (inherited from `Input`).|
|`multiple`|Boolean|`false`|Whether the text field accepts multiple values (inherited from `Input`).|
|`min`|String|`''`|Minimum value for number/date inputs (inherited from `Input`).|
|`max`|String|`''`|Maximum value for number/date inputs (inherited from `Input`).|
|`step`|String|`''`|Step value for number inputs (inherited from `Input`).|
|`minLength`|Number|`-1`|Minimum length for text inputs (inherited from `Input`).|
|`maxLength`|Number|`-1`|Maximum length for text inputs (inherited from `Input`).|
|`pattern`|String|`''`|Regular expression pattern for validation (inherited from `Input`).|
|`autocomplete`|String|`''`|Autocomplete behavior hint (inherited from `Input`).|
|`focused`|Boolean|`false`|Whether the text field is focused (inherited from `Input`).|
|`disabled`|Boolean|`false`|Whether the text field is disabled (inherited from `FormAssociated`).|

## Methods

|Name|Description|
|---|---|
|`focus()`|Focuses the text field.|
|`blur()`|Removes focus from the text field.|
|`select()`|Selects the text content of the field.|
