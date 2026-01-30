---
title: Checkbox - M3 - SEELE
---

# 複選框

複選框允許用戶從一組項目中選擇一個或多個項目。複選框可以打開或關閉選項。

- 遵循：[Checkboxes - Material Design 3](https://m3.material.io/components/checkbox/overview)
- 繼承自：[`Checkbox`](../../base/components/checkbox.md)

<!-- @docs-uncomment
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
@docs-uncomment-end -->

### 用法

複選框可以是獨立的、預選中的或不確定狀態的。

<!-- @docs-demo-code-block -->

```html
<md-checkbox></md-checkbox>
<md-checkbox checked></md-checkbox>
<md-checkbox indeterminate></md-checkbox>
```

<!-- @docs-demo-code-block -->

```html
<div>
  <label>
    <md-checkbox id="parent-checkbox"></md-checkbox>
    Parent Checkbox
  </label>
  <ul style="margin: 0; list-style: none">
    <li>
      <label>
        <md-checkbox
          class="child-checkbox"
          data-parent="parent-checkbox"
        ></md-checkbox>
        Child Checkbox 1
      </label>
    </li>
    <li>
      <label>
        <md-checkbox
          class="child-checkbox"
          data-parent="parent-checkbox"
        ></md-checkbox>
        Child Checkbox 2
      </label>
    </li>
    <li>
      <label>
        <md-checkbox
          class="child-checkbox"
          data-parent="parent-checkbox"
        ></md-checkbox>
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
```

#### 標籤

使用 `<label>` 元素將標籤與複選框關聯。

<!-- @docs-demo-code-block -->

```html
<label>
  <md-checkbox></md-checkbox>
  Checkbox one
</label>

<md-checkbox id="checkbox-two"></md-checkbox>
<label for="checkbox-two">Checkbox two</label>
```

### 無障礙

爲沒有標籤的複選框或需要更具描述性的標籤的複選框添加 `aria-label` 屬性。

<!-- @docs-demo-code-block -->

```html
<md-checkbox aria-label="Select all checkboxes"></md-checkbox>

<label>
  <md-checkbox aria-label="Agree to terms and conditions"></md-checkbox>
  Agree
</label>
```

注意：複選框不會自動由 `<label>` 元素標記，始終需要 `aria-label`。

## 屬性

| 名稱    | 類型    | 默認值 | 描述                              |
| ------- | ------- | ------- | ---------------------------------------- |
| `error` | Boolean | `false` | 複選框是否處於錯誤狀態。 |

注意：繼承 [`Checkbox`](../../base/components/checkbox.md) 的 `checked`、`indeterminate`、`required` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 事件

注意：繼承 [`Checkbox`](../../base/components/checkbox.md) 的 `change` 事件。
