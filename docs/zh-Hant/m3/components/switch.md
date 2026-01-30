---
title: Switch - M3 - SEELE
---

# 開關

開關是調整設置的首選方式。它們用於控制二進制選項——比如開/關或真/假。

- 遵循：[Switches - Material Design 3](https://m3.material.io/components/switch/overview)
- 繼承自：[`Switch`](../../base/components/switch.md)

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

開關可以是獨立的或預選中的。

<!-- @docs-demo-code-block -->

```html
<md-switch aria-label="unchecked switch"></md-switch>
<md-switch aria-label="pre-checked switch" checked></md-switch>
```

#### 圖標

圖標可用於在視覺上強調開關的選中狀態。開關可以選擇顯示兩個圖標或僅顯示選中的圖標。

<!-- @docs-demo-code-block -->

```html
<md-switch icons></md-switch>
<md-switch icons checked></md-switch>

<md-switch icons checkedicononly></md-switch>
<md-switch icons checkedicononly checked></md-switch>
```

#### 標籤

使用 `<label>` 元素將標籤與複選框關聯。

<!-- @docs-demo-code-block -->

```html
<label>
  Wi-Fi
  <md-switch checked></md-switch>
</label>

<label for="switch-bluetooth">Bluetooth</label>
<md-switch id="switch-bluetooth"></md-switch>
```

### 無障礙

爲沒有標籤的開關或需要更具描述性的標籤的開關添加 `aria-label` 屬性。

<!-- @docs-demo-code-block -->

```html
<md-switch aria-label="Lights"></md-switch>

<label>
  All
  <md-switch aria-label="All notifications"></md-switch>
</label>
```

注意：開關不會自動由 `<label>` 元素標記，始終需要 `aria-label`。

## 屬性

| 名稱              | 類型    | 默認值 | 描述                                       |
| ----------------- | ------- | ------- | ------------------------------------------------- |
| `icons`           | Boolean | `false` | 是否在開關滑塊中顯示圖標。     |
| `checkedIconOnly` | Boolean | `false` | 是否僅在選中時顯示圖標。    |

注意：繼承 [`Switch`](../../base/components/switch.md) 的 `checked` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 事件

注意：繼承 [`Switch`](../../base/components/switch.md) 的 `change` 事件。
