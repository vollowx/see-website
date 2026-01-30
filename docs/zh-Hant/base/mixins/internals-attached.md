---
title: InternalsAttached - Base - SEELE
---

# InternalsAttached（內部附加）

- 接受：繼承 [`LitElement`](https://lit.dev/docs/api/LitElement/) 的類

InternalsAttached 混合類通過 `internals` 符號提供對 Element Internals API 的訪問。

## 用法

混合了 InternalsAttached 的元素可以通過 `internals` 符號訪問 ElementInternals：

```javascript
import { InternalsAttached, internals } from './mixins/internals-attached.js';

class MyElement extends InternalsAttached(LitElement) {
  constructor() {
    super();
    this[internals].role = 'button';
  }
}
```

## 屬性

|名稱|類型|描述|
|---|---|---|
|`[internals]`|ElementInternals|通過 `internals` 符號訪問元素的內部。首次訪問時自動創建。|

## 注意事項

- 內部在首次訪問時通過 `attachInternals()` 延遲創建
- 用於與表單交互的表單關聯自定義元素
- 提供對 ARIA 屬性、狀態和表單功能的訪問
