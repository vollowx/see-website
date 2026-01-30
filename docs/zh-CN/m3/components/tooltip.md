---
title: Tooltip - M3 - SEELE
---

# 工具提示

工具提示在用户悬停、聚焦或点击元素时显示信息性文本。

- 遵循：[Tooltips - Material Design 3](https://m3.material.io/components/tooltips/overview)
- 继承自：[`Tooltip`](../../base/components/tooltip.md)

<!-- @docs-demo-code-block -->

```html
<md-icon-button id="tooltip-anchor">
  <iconify-icon icon="material-symbols:search"></iconify-icon>
</md-icon-button>
<md-tooltip for="tooltip-anchor">Search for contact</md-tooltip>
<md-icon-button id="tooltip-anchor-2">
  <iconify-icon icon="material-symbols:settings"></iconify-icon>
</md-icon-button>
<md-tooltip for="tooltip-anchor-2">Settings</md-tooltip>
<md-button id="tooltip-anchor-3">
  Max Width
  <iconify-icon slot="icon" icon="material-symbols:width"></iconify-icon>
</md-button>
<md-tooltip for="tooltip-anchor-3"
  >Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel
  aliquam tellus. Praesent non nunc mollis, fermentum neque at, semper arcu.
  Nullam eget est sed sem iaculis gravida eget vitae justo.</md-tooltip
>
```

## 属性

| 名称  | 类型   | 默认值 | 描述                                      |
| ----- | ------ | ------- | ------------------------------------------------ |
| `for` | String | `''`    | 工具提示附加到的元素的 ID。 |

注意：继承 [`Tooltip`](../../base/components/tooltip.md) 的 `align`、`offset`、`visible`。

## 方法

| 名称     | 描述        |
| -------- | ------------------ |
| `show()` | 显示工具提示。 |
| `hide()` | 隐藏工具提示。 |
