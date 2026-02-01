---
title: Slider - M3 - SEELE
---

# Slider

Sliders allow users to view and select a value (or range) along a track. They're ideal for adjusting settings such as volume and brightness, or for applying image filters.

- Follows: [Sliders - Material Design 3](https://m3.material.io/components/sliders/overview)
- Inherits: [`Slider`](../../base/classes/slider.md)

<!-- @docs-uncomment
## Interactive Demo

<sw-demo hascontrols>
  <md-slider id="slider-interactive"></md-slider>

  <label slot="controls" for="slider-properties-value">
    Value (0-100)
    <input type="number" id="slider-properties-value" min="0" max="100" value="50">
  </label>
  <label slot="controls" for="slider-properties-labeled">
    Labeled
    <md-switch id="slider-properties-labeled"></md-switch>
  </label>
  <label slot="controls" for="slider-properties-ticks">
    Ticks
    <md-switch id="slider-properties-ticks"></md-switch>
  </label>
  <label slot="controls" for="slider-properties-disabled">
    Disabled
    <md-switch id="slider-properties-disabled"></md-switch>
  </label>
  <label slot="controls" for="slider-properties-range">
    Range
    <md-switch id="slider-properties-range"></md-switch>
  </label>
</sw-demo>
@docs-uncomment-end -->

### Usage

#### Basic Slider

Sliders can be used standalone with a default value range of 0-100.

<!-- @docs-demo-code-block -->

```html
<md-slider data-aria-label="Volume"></md-slider>
<md-slider data-aria-label="Brightness" value="75"></md-slider>
```

#### Range Slider

Range sliders allow users to select a range between two values using start and end handles.

<!-- @docs-demo-code-block -->

```html
<md-slider
  range
  value-start="20"
  value-end="80"
  data-aria-label="Price range"
></md-slider>
```

#### With Labels

Value labels can be displayed on the handles to show the current value(s).

<!-- @docs-demo-code-block -->

```html
<md-slider labeled value="50" data-aria-label="Volume"></md-slider>

<md-slider
  range
  labeled
  value-start="20"
  value-end="80"
  data-aria-label="Temperature range"
></md-slider>
```

#### With Tick Marks

Tick marks can be displayed along the track to indicate step intervals.

<!-- @docs-demo-code-block -->

```html
<md-slider ticks step="10" data-aria-label="Volume"></md-slider>

<md-slider
  range
  ticks
  labeled
  step="25"
  value-start="25"
  value-end="75"
  data-aria-label="Range with ticks"
></md-slider>
```

#### Custom Range and Step

Customize the minimum, maximum, and step values.

<!-- @docs-demo-code-block -->

```html
<md-slider min="0" max="200" step="5" value="100" data-aria-label="Custom range"></md-slider>

<md-slider
  min="-50"
  max="50"
  step="10"
  value="0"
  data-aria-label="Temperature"
></md-slider>
```

#### In Forms

Sliders can be used in forms with the `name` attribute.

<!-- @docs-demo-code-block -->

```html
<form>
  <label>
    Volume
    <md-slider name="volume" value="50" data-aria-label="Volume"></md-slider>
  </label>

  <label>
    Price Range
    <md-slider
      range
      name-start="price-min"
      name-end="price-max"
      value-start="20"
      value-end="80"
      data-aria-label="Price range"
    ></md-slider>
  </label>

  <button type="submit">Submit</button>
</form>
```

### Accessibility

Add a `data-aria-label` attribute to sliders to provide accessible labels for screen readers.

<!-- @docs-demo-code-block -->

```html
<md-slider data-aria-label="Volume level"></md-slider>

<md-slider
  range
  data-aria-label="Price range"
  aria-label-start="Minimum price"
  aria-label-end="Maximum price"
></md-slider>
```

For custom value text that differs from the numeric value, use `data-aria-valuetext` attribute:

<!-- @docs-demo-code-block -->

```html
<md-slider
  value="3"
  min="1"
  max="5"
  data-aria-label="Rating"
  data-aria-valuetext="3 stars"
></md-slider>
```

## Properties

All properties from the base [`Slider`](../../base/classes/slider.md) class are available.
