---
title: ListItem - Base - SEELE
---

# ListItem

- 混入：[`InternalsAttached`](../mixins/internals-attached.md)
- 混入：[`FormAssociated`](../mixins/form-associated.md)

用于菜单和选择框中的交互式列表项的基础组件。

由于列表使用了 `ariaActiveDescendant`，列表项实际上并不会被聚焦。如果想要为被聚焦的列表项添加样式或动画，你可以在 CSS 中使用 `:state(focused)`，或通过覆写 `updated()` 来处理自定义行为。

## 属性

| 名称       | 类型    | 默认值  | 描述               |
| ---------- | ------- | ------- | ------------------ |
| `selected` | Boolean | `false` | 列表项是否被选中。 |
| `focused`  | Boolean | `false` | 列表项是否有焦点。 |

## 方法

| 名称      | 描述                         |
| --------- | ---------------------------- |
| `focus()` | 在视觉上将焦点状态设置为真。 |
| `blur()`  | 在视觉上将焦点状态设置为假。 |
