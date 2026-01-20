---
title: Button - SEE
---

# Button

<ul id="toc"></ul>

## Interactive Demo

<sw-demo hascontrols>
  <md-button id="button-interactive">
    <md-icon slot="icon">search</md-icon>
    <span>Controlled</span>
  </md-button>

  <label slot="controls" for="button-properties-label">
    Label
    <md-outlined-text-field id="button-properties-label" value="Controlled"></md-outlined-text-field>
  </label>

  <label slot="controls" for="button-properties-size">
    Size
    <md-outlined-select name="size" id="button-properties-size" value="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-shape">
    Shape
    <md-outlined-select name="shape" id="button-properties-shape" value="rounded">
      <md-option value="rounded">rounded</md-option>
      <md-option value="square">square</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-variant">
    Variant
    <md-outlined-select name="variant" id="button-properties-variant" value="filled">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="elevated">elevated</md-option>
      <md-option value="outlined">outlined</md-option>
      <md-option value="text">text</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-properties-color">
    Color
    <md-outlined-select name="color" id="button-properties-color" value="primary">
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

Note: `color` is not part of the official Material You. Color of tonal buttons is always secondary container. Color of outlined buttons is always on outline variant.

### Types

<sw-demo>
  <md-button>Filled</md-button>
  <md-button variant="tonal">Tonal</md-button>
  <md-button class="buttons" variant="elevated">
    <md-icon slot="icon">search</md-icon>
    Elevated
  </md-button>
  <md-button variant="outlined">Outlined</md-button>
  <md-button variant="text">Text</md-button>
</sw-demo>

### Usage

<sw-demo>
  <md-button variant="outlined">Back</md-button>
  <md-button>Complete</md-button>
</sw-demo>

#### Icon

<sw-demo>
  <md-button variant="tonal">
    Send
    <md-icon slot="icon">send</md-icon>
  </md-button>

  <md-button variant="text" trailingicon>
    <md-icon slot="icon">open_in_new</md-icon>
    Open
  </md-button>
</sw-demo>

```html
<md-button variant="tonal">
  Send
  <md-icon slot="icon">send</md-icon>
</md-button>

<md-button variant="text" trailingicon>
  Open
  <md-icon slot="icon">open_in_new</md-icon>
</md-button>
```

### Toggle Button

#### Interactive Demo

<sw-demo hascontrols>
  <md-button-toggle id="button-toggle-interactive">
    <md-icon slot="icon">bookmark</md-icon>
    <md-icon slot="icon-checked" style="font-variation-settings: 'FILL' 1">bookmark</md-icon>
    <span>Bookmark</span>
    <span slot="checked">Bookmarked</span>
  </md-button-toggle>

  <label slot="controls" for="button-toggle-properties-variant">
    Variant
    <md-outlined-select name="variant" id="button-toggle-properties-variant" value="filled">
      <md-option value="filled">filled</md-option>
      <md-option value="tonal">tonal</md-option>
      <md-option value="elevated">elevated</md-option>
      <md-option value="outlined">outlined</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-shape">
    Shape
    <md-outlined-select name="shape" id="button-toggle-properties-shape" value="rounded">
      <md-option value="rounded">rounded</md-option>
      <md-option value="square">square</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-size">
    Size
    <md-outlined-select name="size" id="button-toggle-properties-size" value="small">
      <md-option value="xsmall">xsmall</md-option>
      <md-option value="small">small</md-option>
      <md-option value="medium">medium</md-option>
      <md-option value="large">large</md-option>
      <md-option value="xlarge">xlarge</md-option>
    </md-outlined-select>
  </label>

  <label slot="controls" for="button-toggle-properties-disabled">
    Disabled
    <md-switch id="button-toggle-properties-disabled"></md-switch>
  </label>
</sw-demo>

#### Usage

<sw-demo>
  <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
    <md-icon-button variant="tonal" width="narrow" aria-label="Pause">
      <md-icon>pause</md-icon>
    </md-icon-button>
    <md-button-toggle size="medium" checked>
      <span>Stop</span>
      <span slot="checked">Start</span>
    </md-button-toggle>
    <md-icon-button variant="outlined" width="narrow" aria-label="Restart">
      <md-icon>replay</md-icon>
    </md-icon-button>
  </div>
</sw-demo>
