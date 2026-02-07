---
title: FocusDelegated - Base - SEELE
---

# FocusDelegated（焦点委托）

- 接受：继承 [`LitElement`](https://lit.dev/docs/api/LitElement/) 的类

FocusDelegated 混合类启用自动焦点委托到 shadow root 内的第一个可聚焦元素。它将元素的角色设置为 `presentation`，并配置 shadow root 的 `delegatesFocus: true`。

这对于表单关联元素特别有用，其中自定义元素本身应充当容器，自动将焦点委托给其 shadow DOM 内的交互元素。

## 实现细节

此混合类：
- 将 `shadowRootOptions.delegatesFocus` 设置为 `true`，允许自动焦点委托到 shadow DOM 中的第一个可聚焦元素
- 通过 ElementInternals 将元素的 ARIA 角色设置为 `presentation`，表明该元素纯粹是展示性的，其子元素处理交互
