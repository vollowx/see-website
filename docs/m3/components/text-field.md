---
title: Text Field - SEE
---

# Text Field

<ul id="toc"></ul>

<sw-demo>
  <md-outlined-text-field label="Labelled" placeholder="Placeholder"></md-outlined-text-field>
  <md-filled-text-field label="Labelled" placeholder="Placeholder"></md-filled-text-field>
</sw-demo>

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`label`|`string`|`''`|The label text for the text field.|
|`supportingText`|`string`|`''`|Helper text displayed below the text field.|
|`type`|`string`|`'text'`|The input type (inherited from Input).|
|`value`|`string`|`''`|The current value of the text field (inherited from Input).|
|`placeholder`|`string`|`''`|The placeholder text when the field is empty (inherited from Input).|
|`required`|`boolean`|`false`|Whether the text field is required (inherited from Input).|
|`readOnly`|`boolean`|`false`|Whether the text field is read-only (inherited from Input).|
|`multiple`|`boolean`|`false`|Whether the text field accepts multiple values (inherited from Input).|
|`min`|`string`|`''`|Minimum value for number/date inputs (inherited from Input).|
|`max`|`string`|`''`|Maximum value for number/date inputs (inherited from Input).|
|`step`|`string`|`''`|Step value for number inputs (inherited from Input).|
|`minLength`|`number`|`-1`|Minimum length for text inputs (inherited from Input).|
|`maxLength`|`number`|`-1`|Maximum length for text inputs (inherited from Input).|
|`pattern`|`string`|`''`|Regular expression pattern for validation (inherited from Input).|
|`autocomplete`|`string`|`''`|Autocomplete behavior hint (inherited from Input).|
|`focused`|`boolean`|`false`|Whether the text field is focused (inherited from Input).|
|`disabled`|`boolean`|`false`|Whether the text field is disabled (inherited from FormAssociated).|

## Methods

|Name|Description|
|---|---|
|`focus()`|Focuses the text field.|
|`blur()`|Removes focus from the text field.|
|`select()`|Selects the text content of the field.|
