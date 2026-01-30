---
title: InternalsAttached - Base - SEELE
---

# InternalsAttached

- Accepts: classes inheriting [`LitElement`](https://lit.dev/docs/api/LitElement/)

The InternalsAttached mixin provides access to Element Internals API through the `internals` symbol.

## Usage

Elements that mix InternalsAttached get access to ElementInternals via the `internals` symbol:

```javascript
import { InternalsAttached, internals } from './mixins/internals-attached.js';

class MyElement extends InternalsAttached(LitElement) {
  constructor() {
    super();
    this[internals].role = 'button';
  }
}
```

## Properties

|Name|Type|Description|
|---|---|---|
|`[internals]`|ElementInternals|Access to the element's internals via the `internals` symbol. Automatically created on first access.|

## Notes

- The internals are lazily created via `attachInternals()` on first access
- Used by form-associated custom elements to interact with forms
- Provides access to ARIA attributes, states, and form features
