---
title: Fab - M3 - SEELE
---

# 浮動操作按鈕 (FAB)

浮動操作按鈕（FAB）幫助用戶執行主要操作。

- 遵循：[FABs - Material Design 3](https://m3.material.io/components/floating-action-button/overview)
- 繼承自：[`Button`](../../base/components/button.md)

## 類型

<!-- @docs-demo-code-block -->

```html
<md-fab color="primary" aria-label="Accessibility">
  <iconify-icon icon="material-symbols:accessible-forward"></iconify-icon>
</md-fab>
<md-fab size="small" color="tertiary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab size="large" aria-label="Color palette">
  <iconify-icon icon="material-symbols:palette"></iconify-icon>
</md-fab>
```

### 擴展 FAB

<!-- @docs-demo-code-block -->

```html
<md-fab>
  <iconify-icon icon="material-symbols:navigation"></iconify-icon>
  <span slot="label">Navigation</span>
</md-fab>
<md-fab><span slot="label">Reroute</span></md-fab>
```

## 用法

FAB 應該包含一個圖標，例如字體 `iconify-icon`、`svg` 或 `img`。

<!-- @docs-demo-code-block -->

```html
<md-fab aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### 降低高度

可以使用 `lowered` 屬性將 FAB 設置爲較低的高度。

<!-- @docs-demo-code-block -->

```html
<md-fab lowered aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### 顏色

可以使用 `color` 屬性更改 FAB 的顏色。可以設置爲 "surface"（默認）、"primary"、"secondary" 或 "tertiary"。

<!-- @docs-demo-code-block -->

```html
<md-fab color="primary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab color="secondary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab color="tertiary" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### 尺寸

通過設置 `size` 屬性，FAB 可以是小、中（默認）或大。

<!-- @docs-demo-code-block -->

```html
<md-fab size="small" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
<md-fab size="large" aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

## 無障礙

僅包含圖標的 FAB 必須包含描述其操作的 `aria-label`。否則，如果未提供 `aria-label`，FAB 將默認宣佈其可見內容。

擴展 FAB 使用它們的 `label` 來提供無障礙支持。如果需要額外的上下文，請添加 `aria-label`。通過提供 `label` 屬性，擴展 FAB 將確保不宣佈圖標。

## 屬性

| 名稱      | 類型                                                  | 默認值     | 描述                            |
| --------- | ----------------------------------------------------- | ----------- | -------------------------------------- |
| `size`    | `'small' \| 'medium' \| 'large'`                      | `'medium'`  | FAB 的尺寸。                   |
| `color`   | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'surface'` | FAB 的顏色變體。          |
| `lowered` | Boolean                                               | `false`     | FAB 是否具有降低的高度。 |

注意：繼承 [`Button`](../../base/components/button.md) 的 `type` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 方法

使用 `click()` 以編程方式觸發 FAB。
