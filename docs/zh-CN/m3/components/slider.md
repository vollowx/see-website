---
title: Slider - M3 - SEELE
---

# Slider（滑块）

滑块允许用户查看和选择轨道上的值（或范围）。它们非常适合调整音量和亮度等设置，或应用图像滤镜。

- 遵循：[Sliders - Material Design 3](https://m3.material.io/components/sliders/overview)
- 继承：[`Slider`](../../base/classes/slider.md)

<!-- @docs-uncomment
## 交互演示

<sw-demo hascontrols>
  <md-slider id="slider-interactive"></md-slider>

  <label slot="controls" for="slider-properties-value">
    值 (0-100)
    <input type="number" id="slider-properties-value" min="0" max="100" value="50">
  </label>
  <label slot="controls" for="slider-properties-labeled">
    显示标签
    <md-switch id="slider-properties-labeled"></md-switch>
  </label>
  <label slot="controls" for="slider-properties-ticks">
    显示刻度
    <md-switch id="slider-properties-ticks"></md-switch>
  </label>
  <label slot="controls" for="slider-properties-disabled">
    禁用
    <md-switch id="slider-properties-disabled"></md-switch>
  </label>
  <label slot="controls" for="slider-properties-range">
    范围模式
    <md-switch id="slider-properties-range"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### 用法

#### 基础滑块

滑块可以独立使用，默认值范围为 0-100。

<!-- @docs-demo-code-block -->

```html
<md-slider data-aria-label="音量"></md-slider>
<md-slider data-aria-label="亮度" value="75"></md-slider>
```

#### 范围滑块

范围滑块允许用户使用起始和结束手柄选择两个值之间的范围。

<!-- @docs-demo-code-block -->

```html
<md-slider
  range
  value-start="20"
  value-end="80"
  data-aria-label="价格范围"
></md-slider>
```

#### 带标签

可以在手柄上显示值标签以显示当前值。

<!-- @docs-demo-code-block -->

```html
<md-slider labeled value="50" data-aria-label="音量"></md-slider>

<md-slider
  range
  labeled
  value-start="20"
  value-end="80"
  data-aria-label="温度范围"
></md-slider>
```

#### 带刻度标记

可以沿轨道显示刻度标记以指示步进间隔。

<!-- @docs-demo-code-block -->

```html
<md-slider ticks step="10" data-aria-label="音量"></md-slider>

<md-slider
  range
  ticks
  labeled
  step="25"
  value-start="25"
  value-end="75"
  data-aria-label="带刻度的范围"
></md-slider>
```

#### 自定义范围和步进

自定义最小值、最大值和步进值。

<!-- @docs-demo-code-block -->

```html
<md-slider min="0" max="200" step="5" value="100" data-aria-label="自定义范围"></md-slider>

<md-slider
  min="-50"
  max="50"
  step="10"
  value="0"
  data-aria-label="温度"
></md-slider>
```

#### 在表单中使用

滑块可以在表单中使用 `name` 属性。

<!-- @docs-demo-code-block -->

```html
<form>
  <label>
    音量
    <md-slider name="volume" value="50" data-aria-label="音量"></md-slider>
  </label>

  <label>
    价格范围
    <md-slider
      range
      name-start="price-min"
      name-end="price-max"
      value-start="20"
      value-end="80"
      data-aria-label="价格范围"
    ></md-slider>
  </label>

  <button type="submit">提交</button>
</form>
```

### 无障碍性

为滑块添加 `data-aria-label` 属性，为屏幕阅读器提供可访问的标签。

<!-- @docs-demo-code-block -->

```html
<md-slider data-aria-label="音量级别"></md-slider>

<md-slider
  range
  data-aria-label="价格范围"
  aria-label-start="最低价格"
  aria-label-end="最高价格"
></md-slider>
```

对于与数字值不同的自定义值文本，使用 `data-aria-valuetext` 属性：

<!-- @docs-demo-code-block -->

```html
<md-slider
  value="3"
  min="1"
  max="5"
  data-aria-label="评分"
  data-aria-valuetext="3 星"
></md-slider>
```

## 属性

基础 [`Slider`](../../base/classes/slider.md) 类的所有属性都可用。
