---
title: Icon Button - M3 - SEELE
---

# 圖標按鈕

## 操作按鈕

- 遵循：[Icon Buttons - Material Design 3](https://m3.material.io/components/icon-buttons/overview)
- 繼承自：[`Button`](../../base/components/button.md)

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

### 屬性

| 名稱      | 類型                                                     | 默認值      | 描述                                  |
| --------- | -------------------------------------------------------- | ------------ | -------------------------------------------- |
| `size`    | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`    | 圖標按鈕的尺寸。                 |
| `variant` | `'filled' \| 'tonal' \| 'outlined' \| 'text'`            | `'text'`     | 圖標按鈕的視覺樣式變體。 |
| `width`   | `'standard' \| 'narrow' \| 'wide'`                       | `'standard'` | 圖標按鈕的寬度變體。        |

注意：繼承 [`Button`](../../base/components/button.md) 的 `type` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

### 方法

使用 `click()` 以編程方式觸發按鈕。

### 類型

<!-- @docs-demo-code-block -->

```html
<md-icon-button variant="filled"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
<md-icon-button variant="tonal"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
<md-icon-button variant="outlined"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
<md-icon-button variant="text"><iconify-icon icon="material-symbols:settings"></iconify-icon></md-icon-button>
```

## 切換按鈕

- 繼承自：[`Switch`](../../base/components/switch.md)

圖標按鈕可用於在兩種狀態之間進行選擇。

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

### 屬性

| 名稱      | 類型                                                     | 默認值      | 描述                                         |
| --------- | -------------------------------------------------------- | ------------ | --------------------------------------------------- |
| `size`    | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`    | 圖標按鈕切換的尺寸。                 |
| `variant` | `'filled' \| 'tonal' \| 'outlined' \| 'text'`            | `'text'`     | 圖標按鈕切換的視覺樣式變體。 |
| `width`   | `'standard' \| 'narrow' \| 'wide'`                       | `'standard'` | 圖標按鈕切換的寬度變體。        |

注意：繼承 [`Switch`](../../base/components/switch.md) 的 `checked` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

### 事件

注意：繼承 [`Switch`](../../base/components/switch.md) 的 `change` 事件。

### 類型

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
