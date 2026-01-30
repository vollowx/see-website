---
title: Attachable - Base - SEELE
---

# Attachable（可附加）

- 接受：继承 [`LitElement`](https://lit.dev/docs/api/LitElement/) 的类

Attachable 混合类使元素能够通过 `for` 属性或父级关系附加到其他元素并控制它们。

## 属性

|名称|类型|描述|
|---|---|---|
|`htmlFor`|String|要附加到的控制元素的 ID。设置时，元素将附加到具有此 ID 的元素。|
|`currentControl`|HTMLElement \| null|当前附加的控制元素的引用。|
|`$control`|HTMLElement \| null|控制元素的获取器/设置器。如果设置了 `for` 属性，则通过 ID 查找元素。否则使用父元素。|

## 方法

|名称|描述|
|---|---|
|`attach(control)`|附加到特定的控制元素。|
|`detach()`|从当前控制元素分离。|
|`setCurrentControl(control)`|更新当前控制元素的内部方法。|
|`handleControlChange(prev, next)`|控制元素更改时调用的钩子方法。重写以处理控制元素更改。|
