---
title: Checkbox - M3 - SEE
---

# Checkbox

<ul id="toc"></ul>

Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on or off.

- Follows: [Checkboxes - Material Design 3](https://m3.material.io/components/checkbox/overview)
- Inherits: [`Checkbox`](../../base/components/checkbox.md)

## Interactive Demo

<sw-demo hascontrols>
  <label for="checkbox-interactive">
    <md-checkbox id="checkbox-interactive"></md-checkbox>
    Controlled
  </label>

  <label slot="controls" for="checkbox-properties-checked">
    Checked
    <md-switch id="checkbox-properties-checked"></md-switch>
  </label>
  <label slot="controls" for="checkbox-properties-indeterminate">
    Indeterminate
    <md-switch id="checkbox-properties-indeterminate"></md-switch>
  </label>
  <label slot="controls" for="checkbox-properties-disabled">
    Disabled
    <md-switch id="checkbox-properties-disabled"></md-switch>
  </label>
  <label slot="controls" for="checkbox-properties-error">
    Error
    <md-switch id="checkbox-properties-error"></md-switch>
  </label>
</sw-demo>

### Usage

Checkboxes may be standalone, pre-checked, or indeterminate.

<sw-demo>
  <md-checkbox></md-checkbox>
  <md-checkbox checked></md-checkbox>
  <md-checkbox indeterminate></md-checkbox>
</sw-demo>

<sw-demo>
  <div>
    <label>
      <md-checkbox id="parent-checkbox"></md-checkbox>
      Parent Checkbox
    </label>
    <ul style="margin: 0; list-style: none">
      <li>
        <label>
          <md-checkbox class="child-checkbox" data-parent="parent-checkbox"></md-checkbox>
          Child Checkbox 1
        </label>
      </li>
      <li>
        <label>
          <md-checkbox class="child-checkbox" data-parent="parent-checkbox"></md-checkbox>
          Child Checkbox 2
        </label>
      </li>
      <li>
        <label>
          <md-checkbox class="child-checkbox" data-parent="parent-checkbox"></md-checkbox>
          Child Checkbox 3
        </label>
      </li>
    </ul>
  </div>

  <script>
    const parentCheckbox = document.getElementById('parent-checkbox');
    const childCheckboxes = document.querySelectorAll('.child-checkbox');
    parentCheckbox.addEventListener('change', () => {
      const isChecked = parentCheckbox.checked;
      childCheckboxes.forEach((child) => {
        child.checked = isChecked;
      });
    });
    childCheckboxes.forEach((child) => {
      child.addEventListener('change', () => {
        const allChecked = Array.from(childCheckboxes).every((cb) => cb.checked);
        const someChecked = Array.from(childCheckboxes).some((cb) => cb.checked);

        parentCheckbox.checked = allChecked;
        parentCheckbox.indeterminate = !allChecked && someChecked;
      });
    });
  </script>
</sw-demo>

#### Label

Associate a label with a checkbox using the `<label>` element.

<sw-demo>
  <label>
    <md-checkbox></md-checkbox>
    Checkbox one
  </label>

  <md-checkbox id="checkbox-two"></md-checkbox>
  <label for="checkbox-two">Checkbox two</label>
</sw-demo>

### Accessibility

Add an `aria-label` attribute to checkboxes without labels or checkboxes whose labels need to be more descriptive.

<sw-demo>
  <md-checkbox aria-label="Select all checkboxes"></md-checkbox>

  <label>
    <md-checkbox aria-label="Agree to terms and conditions"></md-checkbox>
    Agree
  </label>
</sw-demo>

Note: checkboxes are not automatically labelled by `<label>` elements and always need an `aria-label`.

## Properties

|Name|Type|Default|Description|
|---|---|---|---|
|`checked`|`boolean`|`false`|Whether the checkbox is checked (inherited from Checkbox).|
|`indeterminate`|`boolean`|`false`|Whether the checkbox is in an indeterminate state (inherited from Checkbox).|
|`error`|`boolean`|`false`|Whether the checkbox is in an error state.|
|`disabled`|`boolean`|`false`|Whether the checkbox is disabled (inherited from FormAssociated).|

## Events

|Name|Type|Description|
|---|---|---|
|`change`|`CustomEvent<boolean>`|Dispatched when the checked state changes. The `detail` property contains the new checked state.|
