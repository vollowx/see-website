---
title: ListItem - Base - SEELE
---

# ListItem（列表项）

- 混合：[`InternalsAttached`](../mixins/internals-attached.md)
- 混合：[`FormAssociated`](../mixins/form-associated.md)

用于菜单和选择框中的交互式列表项的基础组件。

由于使用了 `ariaActiveDescendant`，列表项实际上并不会被聚焦，而是在 CSS 中使用 `:state(focused)`，或通过重写 `changed()` 来处理自定义行为。

## 属性

| 名称       | 类型    | 默认值  | 描述                       |
| ---------- | ------- | ------- | -------------------------- |
| `selected` | Boolean | `false` | 列表项是否被选中。         |
| `focused`  | Boolean | `false` | 列表项是否有焦点。         |

注意：还从 [`FormAssociated`](../mixins/form-associated.md) 混合类继承 `disabled` 属性。

## 方法

| 名称      | 描述                       |
| --------- | -------------------------- |
| `focus()` | 在视觉上将焦点状态设置为真。 |
| `blur()`  | 在视觉上将焦点状态设置为假。 |
