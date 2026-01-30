---
title: Ripple - M3 - SEELE
---

# 漣漪

漣漪是用於傳達組件或交互元素狀態的狀態層。

狀態層是元素上的半透明覆蓋層，用於指示其狀態。層可以應用於整個元素或圓形形狀。

- 混入：[`InternalsAttached`](../../base/mixins/internals-attached.md)
- 混入：[`Attachable`](../../base/mixins/attachable.md)

<!-- @docs-demo-code-block -->

```html
<style>
  .row {
    align-items: center;
    display: flex;
    gap: 32px;
  }

  .container {
    align-items: center;
    border-radius: 24px;
    display: flex;
    height: 64px;
    justify-content: center;
    outline: 1px solid var(--md-sys-color-outline);
    padding: 16px;
    position: relative;
    width: 64px;
  }

  .container:has(.unbounded) {
    border-radius: 50%;
    outline-style: dashed;
  }

  .anchor {
    background: var(--md-sys-color-primary-container);
    border: 1px solid var(--md-sys-color-outline);
    border-radius: 50%;
    height: 24px;
    width: 24px;

    /* Recommended styles for an unbounded ripple's anchor. */
    display: grid;
    place-items: center;
    position: relative;
  }

  md-ripple.unbounded {
    height: 64px;
    width: 64px;

    /* Recommended styles for an unbounded ripple. */
    border-radius: 50%;
    inset: unset;
  }
</style>

<div class="row">
  <div class="container">
    <md-ripple></md-ripple>
  </div>

  <div class="container" id="touch">
    <div class="anchor">
      <md-ripple for="touch" class="unbounded"></md-ripple>
    </div>
  </div>
</div>
```

## 用法

漣漪在按壓指針交互時顯示。它們可以通過以下三種方式之一附加到控件。

1. 附加到父元素
    <!-- @docs-demo-code-block -->

    ```html
    <button style="position: relative">
      <md-ripple></md-ripple>
      Button
    </button>
    ```

1. 附加到引用的元素
    <!-- @docs-demo-code-block -->

    ```html
    <div style="position: relative">
      <md-ripple
        for="ripple-control-input"
        enterbehavior="none"
        spacebehavior="none"
      ></md-ripple>
      <input id="ripple-control-input" />
    </div>
    ```

1. 命令式附加
    <!-- @docs-demo-code-block -->

    ```html
    <div style="position: relative">
      <md-ripple id="ripple"></md-ripple>
      <br />
      <button id="ripple-control">Button</button>
      <br />
      <br />
    </div>
    <script>
      const ripple = document.querySelector('#ripple');
      const control = document.querySelector('#ripple-control');
      onload = () => ripple.attach(control);
    </script>
    ```

注意：漣漪必須放置在 `position: relative` 容器內。

## 屬性

| 名稱            | 類型     | 默認值    | 描述                                           |
| --------------- | -------- | ---------- | ----------------------------------------------------- |
| `clickBehavior` | `string` | `'always'` | 控制漣漪在點擊事件時的顯示時機。         |
| `enterBehavior` | `string` | `'always'` | 控制漣漪在指針進入事件時的顯示時機。 |
| `spaceBehavior` | `string` | `'once'`   | 控制漣漪在空格鍵按下時的顯示時機。      |
| `for`           | `string` | `''`       | 漣漪附加到的元素的 ID。 |

## 方法

| 名稱              | 描述                                                 |
| ----------------- | ----------------------------------------------------------- |
| `attach(element)` | 以編程方式將漣漪附加到特定元素。 |
