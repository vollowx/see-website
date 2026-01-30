---
title: Switch - M3 - SEELE
---

# 开关

开关是调整设置的首选方式。它们用于控制二进制选项——比如开/关或真/假。

- 遵循：[Switches - Material Design 3](https://m3.material.io/components/switch/overview)
- 继承自：[`Switch`](../../base/components/switch.md)

<!-- @docs-uncomment
## Interactive Demo

<sw-demo hascontrols>
  <label for="switch-interactive">
    <md-switch id="switch-interactive"></md-switch>
    Controlled
  </label>

  <label slot="controls" for="switch-properties-checked">
    Checked
    <md-switch id="switch-properties-checked"></md-switch>
  </label>
  <label slot="controls" for="switch-properties-disabled">
    Disabled
    <md-switch id="switch-properties-disabled"></md-switch>
  </label>
  <label slot="controls" for="switch-properties-icons">
    Icons
    <md-switch id="switch-properties-icons"></md-switch>
  </label>
  <label slot="controls" for="switch-properties-checkedIconOnly">
    Checked Icon Only
    <md-switch id="switch-properties-checkedIconOnly"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### 用法

开关可以是独立的或预选中的。

<!-- @docs-demo-code-block -->

```html
<md-switch aria-label="unchecked switch"></md-switch>
<md-switch aria-label="pre-checked switch" checked></md-switch>
```

#### 图标

图标可用于在视觉上强调开关的选中状态。开关可以选择显示两个图标或仅显示选中的图标。

<!-- @docs-demo-code-block -->

```html
<md-switch icons></md-switch>
<md-switch icons checked></md-switch>

<md-switch icons checkedicononly></md-switch>
<md-switch icons checkedicononly checked></md-switch>
```

#### 标签

使用 `<label>` 元素将标签与复选框关联。

<!-- @docs-demo-code-block -->

```html
<label>
  Wi-Fi
  <md-switch checked></md-switch>
</label>

<label for="switch-bluetooth">Bluetooth</label>
<md-switch id="switch-bluetooth"></md-switch>
```

### 无障碍

为没有标签的开关或需要更具描述性的标签的开关添加 `aria-label` 属性。

<!-- @docs-demo-code-block -->

```html
<md-switch aria-label="Lights"></md-switch>

<label>
  All
  <md-switch aria-label="All notifications"></md-switch>
</label>
```

注意：开关不会自动由 `<label>` 元素标记，始终需要 `aria-label`。

## 属性

| 名称              | 类型    | 默认值 | 描述                                       |
| ----------------- | ------- | ------- | ------------------------------------------------- |
| `icons`           | Boolean | `false` | 是否在开关滑块中显示图标。     |
| `checkedIconOnly` | Boolean | `false` | 是否仅在选中时显示图标。    |

注意：继承 [`Switch`](../../base/components/switch.md) 的 `checked` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 事件

注意：继承 [`Switch`](../../base/components/switch.md) 的 `change` 事件。
