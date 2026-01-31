---
title: 涟漪 - M3 - SEELE
---

# 涟漪

涟漪是用于传达组件或交互元素状态的状态层。

状态层是元素上的半透明覆盖层，用于指示其状态。层可以应用于整个元素或圆形形状。

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

涟漪在按压指针交互时显示。它们可以通过以下三种方式之一附加到控件。

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

注意：涟漪必须放置在 `position: relative` 容器内。

## 属性

| 名称            | 类型     | 默认值     | 描述                                 |
| --------------- | -------- | ---------- | ------------------------------------ |
| `clickBehavior` | `string` | `'always'` | 控制涟漪在点击事件时的显示时机。     |
| `enterBehavior` | `string` | `'always'` | 控制涟漪在指针进入事件时的显示时机。 |
| `spaceBehavior` | `string` | `'once'`   | 控制涟漪在空格键按下时的显示时机。   |

## 方法

| 名称              | 描述                   |
| ----------------- | ---------------------- |
| `attach(element)` | 将涟漪附加到特定元素。 |
