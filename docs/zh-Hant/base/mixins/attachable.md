---
title: Attachable - Base - SEELE
---

# Attachable（可附加）

- 接受：繼承 [`LitElement`](https://lit.dev/docs/api/LitElement/) 的類

Attachable 混合類使元素能夠通過 `for` 屬性或父級關係附加到其他元素並控制它們。

## 屬性

|名稱|類型|描述|
|---|---|---|
|`htmlFor`|String|要附加到的控制元素的 ID。設置時，元素將附加到具有此 ID 的元素。|
|`currentControl`|HTMLElement \| null|當前附加的控制元素的引用。|
|`$control`|HTMLElement \| null|控制元素的獲取器/設置器。如果設置了 `for` 屬性，則通過 ID 查找元素。否則使用父元素。|

## 方法

|名稱|描述|
|---|---|
|`attach(control)`|附加到特定的控制元素。|
|`detach()`|從當前控制元素分離。|
|`setCurrentControl(control)`|更新當前控制元素的內部方法。|
|`handleControlChange(prev, next)`|控制元素更改時調用的鉤子方法。重寫以處理控制元素更改。|
