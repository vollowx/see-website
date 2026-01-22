---
title: Select - M3 - SEE
---

# Select

<ul id="toc"></ul>

Selects allow users to choose one or more items from a list of values.

- Follows: [Menus - Material Design 3](https://m3.material.io/components/menus/overview)
- Inherits: [`Select`](../../base/components/select.md)

<sw-demo>
  <md-outlined-select>
    <md-option value="apple">Apple</md-option>
    <md-option value="apricot">Apricot</md-option>
    <md-option value="banana">Banana</md-option>
    <md-option value="cherry">Cherry</md-option>
    <md-option value="grape">Grape</md-option>
    <md-option value="lemon">Lemon</md-option>
    <md-option value="mango">Mango</md-option>
    <md-option value="orange">Orange</md-option>
    <md-option value="strawberry">Strawberry</md-option>
    <md-option value="watermelon">Watermelon</md-option>
  </md-outlined-select>
</sw-demo>

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`value`|`string`|`''`|The value of the selected option (inherited from Select).|
|`placeholder`|`string`|`''`|The placeholder text when no option is selected (inherited from Select).|
|`label`|`string`|`''`|The label text for the select field.|
|`supportingText`|`string`|`''`|Helper text displayed below the select field.|
|`error`|`boolean`|`false`|Whether the select is in an error state.|
|`open`|`boolean`|`false`|Whether the select menu is open (inherited from Select).|
|`required`|`boolean`|`false`|Whether the select is required (inherited from Select).|
|`quick`|`boolean`|`false`|Whether to use quick mode for menu opening (inherited from Select).|
|`align`|`string`|`'bottom-start'`|The alignment of the menu relative to the select (inherited from Select).|
|`alignStrategy`|`string`|`'absolute'`|The positioning strategy for the menu (inherited from Select).|
|`offset`|`number`|`0`|The offset distance for the menu (inherited from Select).|
|`disabled`|`boolean`|`false`|Whether the select is disabled (inherited from FormAssociated).|

## Methods

|Name|Description|
|---|---|
|`focus()`|Focuses the select element.|
|`blur()`|Removes focus from the select element.|
