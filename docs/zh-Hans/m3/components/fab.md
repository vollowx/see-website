---
title: Fab - M3 - SEELE
---

# 浮动操作按钮 (FAB)

浮动操作按钮（FAB）帮助用户执行主要操作。

- 遵循：[FABs - Material Design 3](https://m3.material.io/components/floating-action-button/overview)
- 继承自：[`Button`](../../base/components/button.md)

## 类型

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

### 扩展 FAB

<!-- @docs-demo-code-block -->

```html
<md-fab>
  <iconify-icon icon="material-symbols:navigation"></iconify-icon>
  <span slot="label">Navigation</span>
</md-fab>
<md-fab><span slot="label">Reroute</span></md-fab>
```

## 用法

FAB 应该包含一个图标，例如字体 `iconify-icon`、`svg` 或 `img`。

<!-- @docs-demo-code-block -->

```html
<md-fab aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### 降低高度

可以使用 `lowered` 属性将 FAB 设置为较低的高度。

<!-- @docs-demo-code-block -->

```html
<md-fab lowered aria-label="Edit">
  <iconify-icon icon="material-symbols:edit"></iconify-icon>
</md-fab>
```

### 颜色

可以使用 `color` 属性更改 FAB 的颜色。可以设置为 "surface"（默认）、"primary"、"secondary" 或 "tertiary"。

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

通过设置 `size` 属性，FAB 可以是小、中（默认）或大。

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

## 无障碍

仅包含图标的 FAB 必须包含描述其操作的 `aria-label`。否则，如果未提供 `aria-label`，FAB 将默认宣布其可见内容。

扩展 FAB 使用它们的 `label` 来提供无障碍支持。如果需要额外的上下文，请添加 `aria-label`。通过提供 `label` 属性，扩展 FAB 将确保不宣布图标。

## 属性

| 名称      | 类型                                                  | 默认值     | 描述                            |
| --------- | ----------------------------------------------------- | ----------- | -------------------------------------- |
| `size`    | `'small' \| 'medium' \| 'large'`                      | `'medium'`  | FAB 的尺寸。                   |
| `color`   | `'surface' \| 'primary' \| 'secondary' \| 'tertiary'` | `'surface'` | FAB 的颜色变体。          |
| `lowered` | Boolean                                               | `false`     | FAB 是否具有降低的高度。 |

注意：继承 [`Button`](../../base/components/button.md) 的 `type` 和 [`FormAssociated`](../../base/mixins/form-associated.md) 的 `disabled`。

## 方法

使用 `click()` 以编程方式触发 FAB。
