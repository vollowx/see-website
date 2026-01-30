---
title: Icon Button - M3 - SEELE
---

# 图标按钮

## 操作按钮

- 遵循：[Icon Buttons - Material Design 3](https://m3.material.io/components/icon-buttons/overview)
- 继承自：[`Button`](../../base/components/button.md)

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-icon-button id="icon-button-interactive">
    <iconify-icon icon="material-symbols:settings"></iconify-icon>
  </md-icon-button>

  <label slot="controls" for="icon-button-properties-size">
    Size
    <md-outlined-select name="size" id="icon-button-properties-size" value="small" display-text="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-properties-variant">
    Variant
    <md-outlined-select name="variant" id="icon-button-properties-variant" value="text" display-text="text">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-properties-width">
    Width
    <md-outlined-select name="width" id="icon-button-properties-width" value="standard" display-text="standard">
      <md-option value="standard">standard</md-option>
      <md-option value="narrow">narrow</md-option>
      <md-option value="wide">wide</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-properties-disabled">
    Disabled
    <md-switch id="icon-button-properties-disabled"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### 属性

| 名称      | 类型                                                     | 默认值      | 描述                                  |
| --------- | -------------------------------------------------------- | ------------ | -------------------------------------------- |
| `size`    | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`    | 图标按钮的尺寸。                 |
| `variant` | `'filled' \| 'tonal' \| 'outlined' \| 'text'`            | `'text'`     | 图标按钮的视觉样式变体。 |
| `width`   | `'standard' \| 'narrow' \| 'wide'`                       | `'standard'` | 图标按钮的宽度变体。        |

注意：继承 [`Button`](../../base/components/button.md) 的 `type` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

### 方法

使用 `click()` 以编程方式触发按钮。

### 类型

<!-- @docs-demo-code-block -->

```html
<md-icon-button variant="filled"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
<md-icon-button variant="tonal"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
<md-icon-button variant="outlined"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
<md-icon-button variant="text"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
```

## 切换按钮

- 继承自：[`Switch`](../../base/components/switch.md)

图标按钮可用于在两种状态之间进行选择。

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-icon-button-toggle id="icon-button-toggle-interactive">
    <iconify-icon icon="material-symbols:favorite-outline"></iconify-icon>
    <iconify-icon slot="checked" icon="material-symbols:favorite"></iconify-icon>
  </md-icon-button-toggle>

  <label slot="controls" for="icon-button-toggle-properties-variant">
    Variant
    <md-outlined-select name="variant" id="icon-button-toggle-properties-variant" value="text" display-text="text">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-toggle-properties-size">
    Size
    <md-outlined-select name="size" id="icon-button-toggle-properties-size" value="small" display-text="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-toggle-properties-width">
    Width
    <md-outlined-select name="width" id="icon-button-toggle-properties-width" value="standard" display-text="standard">
      <md-option value="standard">standard</md-option>
      <md-option value="narrow">narrow</md-option>
      <md-option value="wide">wide</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="icon-button-toggle-properties-disabled">
    Disabled
    <md-switch id="icon-button-toggle-properties-disabled"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### 属性

| 名称      | 类型                                                     | 默认值      | 描述                                         |
| --------- | -------------------------------------------------------- | ------------ | --------------------------------------------------- |
| `size`    | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`    | 图标按钮切换的尺寸。                 |
| `variant` | `'filled' \| 'tonal' \| 'outlined' \| 'text'`            | `'text'`     | 图标按钮切换的视觉样式变体。 |
| `width`   | `'standard' \| 'narrow' \| 'wide'`                       | `'standard'` | 图标按钮切换的宽度变体。        |

注意：继承 [`Switch`](../../base/components/switch.md) 的 `checked` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

### 事件

注意：继承 [`Switch`](../../base/components/switch.md) 的 `change` 事件。

### 类型

<!-- @docs-demo-code-block -->

```html
<md-icon-button-toggle variant="filled">
  <iconify-icon icon="material-symbols:favorite-outline"></iconify-icon>
  <iconify-icon slot="checked" icon="material-symbols:favorite"></iconify-icon>
</md-icon-button-toggle>
<md-icon-button-toggle variant="tonal">
  <iconify-icon icon="material-symbols:favorite-outline"></iconify-icon>
  <iconify-icon slot="checked" icon="material-symbols:favorite"></iconify-icon>
</md-icon-button-toggle>
<md-icon-button-toggle variant="outlined">
  <iconify-icon icon="material-symbols:favorite-outline"></iconify-icon>
  <iconify-icon slot="checked" icon="material-symbols:favorite"></iconify-icon>
</md-icon-button-toggle>
<md-icon-button-toggle variant="text">
  <iconify-icon icon="material-symbols:favorite-outline"></iconify-icon>
  <iconify-icon slot="checked" icon="material-symbols:favorite"></iconify-icon>
</md-icon-button-toggle>
```
