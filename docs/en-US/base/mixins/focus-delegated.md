---
title: FocusDelegated - Base - SEELE
---

# FocusDelegated

- Accepts: classes inheriting [`LitElement`](https://lit.dev/docs/api/LitElement/)

The FocusDelegated mixin enables automatic focus delegation to the first focusable element inside the shadow root. It sets the element's role to `presentation` and configures the shadow root with `delegatesFocus: true`.

This is particularly useful for form-associated elements where the custom element itself should act as a container that automatically delegates focus to interactive elements within its shadow DOM.

## Implementation Details

This mixin:
- Sets `shadowRootOptions.delegatesFocus` to `true`, allowing automatic focus delegation to the first focusable element in the shadow DOM
- Sets the element's ARIA role to `presentation` via ElementInternals, indicating the element is purely presentational and its children handle interaction
