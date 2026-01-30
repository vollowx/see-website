---
title: InternalsAttached - Base - SEELE
---

# InternalsAttached（内部附加）

- 接受：继承 [`LitElement`](https://lit.dev/docs/api/LitElement/) 的类

InternalsAttached 混合类通过 `internals` 符号提供对 Element Internals API 的访问。

## 用法

混合了 InternalsAttached 的元素可以通过 `internals` 符号访问 ElementInternals：

```javascript
import { InternalsAttached, internals } from './mixins/internals-attached.js';

class MyElement extends InternalsAttached(LitElement) {
  constructor() {
    super();
    this[internals].role = 'button';
  }
}
```

## 属性

|名称|类型|描述|
|---|---|---|
|`[internals]`|ElementInternals|通过 `internals` 符号访问元素的内部。首次访问时自动创建。|

## 注意事项

- 内部在首次访问时通过 `attachInternals()` 延迟创建
- 用于与表单交互的表单关联自定义元素
- 提供对 ARIA 属性、状态和表单功能的访问
