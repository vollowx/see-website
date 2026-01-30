---
title: Checkbox - M3 - SEELE
---

# 复选框

复选框允许用户从一组项目中选择一个或多个项目。复选框可以打开或关闭选项。

- 遵循：[Checkboxes - Material Design 3](https://m3.material.io/components/checkbox/overview)
- 继承自：[`Checkbox`](../../base/components/checkbox.md)

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

复选框可以是独立的、预选中的或不确定状态的。

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

#### 标签

使用 `<label>` 元素将标签与复选框关联。

<!-- @docs-demo-code-block -->

```html
<label>
  <md-checkbox></md-checkbox>
  Checkbox one
</label>

<md-checkbox id="checkbox-two"></md-checkbox>
<label for="checkbox-two">Checkbox two</label>
```

### 无障碍

为没有标签的复选框或需要更具描述性的标签的复选框添加 `aria-label` 属性。

<!-- @docs-demo-code-block -->

```html
<md-checkbox aria-label="Select all checkboxes"></md-checkbox>

<label>
  <md-checkbox aria-label="Agree to terms and conditions"></md-checkbox>
  Agree
</label>
```

注意：复选框不会自动由 `<label>` 元素标记，始终需要 `aria-label`。

## 属性

| 名称    | 类型    | 默认值 | 描述                              |
| ------- | ------- | ------- | ---------------------------------------- |
| `error` | Boolean | `false` | 复选框是否处于错误状态。 |

注意：继承 [`Checkbox`](../../base/components/checkbox.md) 的 `checked`、`indeterminate`、`required` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 事件

注意：继承 [`Checkbox`](../../base/components/checkbox.md) 的 `change` 事件。
