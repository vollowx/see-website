---
title: Button - M3 - SEELE
---

# 按鈕

## 操作按鈕

- 遵循：[Buttons - Material Design 3](https://m3.material.io/components/buttons/overview)
- 繼承自：[`Button`](../../base/components/button.md)

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-button id="button-interactive">
    <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
    <span>Controlled</span>
  </md-button>

  <label slot="controls" for="button-properties-label">
    Label
    <md-outlined-text-field id="button-properties-label" value="Controlled"></md-outlined-text-field>
  </label>

  <label slot="controls" for="button-properties-size">
    Size
    <md-outlined-select name="size" id="button-properties-size" value="small" display-text="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-shape">
    Shape
    <md-outlined-select name="shape" id="button-properties-shape" value="rounded" display-text="rounded">
      <md-option value="rounded">rounded</md-option>
      <md-option value="square">square</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-variant">
    Variant
    <md-outlined-select name="variant" id="button-properties-variant" value="filled" display-text="filled">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="elevated">elevated</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-color">
    Color
    <md-outlined-select name="color" id="button-properties-color" value="primary" display-text="primary">
      <md-option value="primary">primary</md-option>
      <md-option value="secondary">secondary</md-option>
      <md-option value="tertiary">tertiary</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-disabled">
    Disabled
    <md-switch id="button-properties-disabled"></md-switch>
  </label>

  <label slot="controls" for="button-properties-trailingIcon">
    Trailing Icon
    <md-switch id="button-properties-trailingIcon"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

注意：`color` 不是官方 Material Design 3 的一部分。填充色調按鈕的顏色始終爲次要容器。輪廓按鈕的顏色始終爲輪廓變體。

### 配置

#### 變體

<!-- @docs-demo-code-block -->

```html
<md-button>Filled</md-button>
<md-button variant="tonal">Tonal</md-button>
<md-button variant="elevated">
  <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
  Elevated
</md-button>
<md-button variant="outlined">Outlined</md-button>
<md-button variant="text">Text</md-button>
```

#### 圖標

<!-- @docs-demo-code-block -->

```html
<md-button variant="tonal">
  Send
  <iconify-icon slot="icon" icon="material-symbols:send"></iconify-icon>
</md-button>

<md-button variant="text" trailingicon>
  Open
  <iconify-icon slot="icon" icon="material-symbols:open-in-new"></iconify-icon>
</md-button>
```

### 屬性

| 名稱           | 類型                                                        | 默認值     | 描述                                                       |
| -------------- | ----------------------------------------------------------- | ----------- | ----------------------------------------------------------------- |
| `color`        | `'primary' \| 'secondary' \| 'tertiary'`                    | `'primary'` | 按鈕的顏色變體。                                  |
| `shape`        | `'rounded' \| 'square'`                                     | `'rounded'` | 按鈕的形狀。                                          |
| `size`         | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'`    | `'small'`   | 按鈕的尺寸。                                           |
| `trailingIcon` | Boolean                                                     | `false`     | 圖標是否顯示在按鈕末尾。           |
| `variant`      | `'filled' \| 'tonal' \| 'elevated' \| 'outlined' \| 'text'` | `'filled'`  | 按鈕的視覺樣式變體。                           |

注意：繼承 [`Button`](../../base/components/button.md) 的 `type` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

### 方法

使用 `click()` 以編程方式觸發按鈕。

## 切換按鈕

- 繼承自：[`Switch`](../../base/components/switch.md)

<!-- @docs-uncomment
### Interactive Demo

<sw-demo hascontrols>
  <md-button-toggle id="button-toggle-interactive">
    <iconify-icon slot="icon" icon="material-symbols:bookmark-outline"></iconify-icon>
    <iconify-icon slot="icon-checked" icon="material-symbols:bookmark"></iconify-icon>
    <span>Bookmark</span>
    <span slot="checked">Bookmarked</span>
  </md-button-toggle>

  <label slot="controls" for="button-toggle-properties-variant">
    Variant
    <md-outlined-select name="variant" id="button-toggle-properties-variant" value="filled" display-text="filled">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="elevated">elevated</md-option>
      <md-option value="outlined">outlined</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-shape">
    Shape
    <md-outlined-select name="shape" id="button-toggle-properties-shape" value="rounded" display-text="rounded">
      <md-option value="rounded">rounded</md-option>
      <md-option value="square">square</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-size">
    Size
    <md-outlined-select name="size" id="button-toggle-properties-size" value="small" display-text="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-color">
    Color
    <md-outlined-select name="color" id="button-toggle-properties-color" value="primary" display-text="primary">
      <md-option value="primary">primary</md-option>
      <md-option value="secondary">secondary</md-option>
      <md-option value="tertiary">tertiary</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-disabled">
    Disabled
    <md-switch id="button-toggle-properties-disabled"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### 用法

<!-- @docs-demo-code-block -->

```html
<div
  style="display: flex; align-items: center; justify-content: center; gap: 8px;"
>
  <md-icon-button variant="tonal" width="narrow" aria-label="Pause">
    <iconify-icon icon="material-symbols:pause"></iconify-icon>
  </md-icon-button>
  <md-button-toggle size="medium" checked>
    <span>Stop</span>
    <span slot="checked">Start</span>
  </md-button-toggle>
  <md-icon-button variant="outlined" width="narrow" aria-label="Restart">
    <iconify-icon icon="material-symbols:replay"></iconify-icon>
  </md-icon-button>
</div>
```

### 屬性

| 名稱           | 類型                                                     | 默認值     | 描述                                                           |
| -------------- | -------------------------------------------------------- | ----------- | --------------------------------------------------------------------- |
| `color`        | `'primary' \| 'secondary' \| 'tertiary'`                 | `'primary'` | 按鈕的顏色變體。                                      |
| `shape`        | `'rounded' \| 'square'`                                  | `'rounded'` | 按鈕的形狀。                                              |
| `size`         | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'small'`   | 按鈕的尺寸。                                               |
| `trailingIcon` | Boolean                                                  | `false`     | 圖標是否顯示在按鈕末尾。               |
| `variant`      | `'filled' \| 'tonal' \| 'elevated' \| 'outlined'`        | `'filled'`  | 按鈕的視覺樣式變體。                               |

注意：繼承 [`Switch`](../../base/components/switch.md) 的 `checked`、[`Button`](../../base/components/button.md) 的 `type` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

### 事件

注意：繼承 [`Switch`](../../base/components/switch.md) 的 `change` 事件。
