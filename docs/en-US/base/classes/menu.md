---
title: Menu - Base - SEELE
---

# Menu

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FocusDelegated`](../mixins/focus-delegated.md)
- Mixes: [`Attachable`](../mixins/attachable.md)

Base menu component for dropdown and popup menus.

## Properties

| Name                   | Type                                                                | Default          | Description                                                       |
| ---------------------- | ------------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------- |
| `type`                 | String                                                              | `'menu'`         | The ARIA role type of the menu (`'menu'` or `'listbox'`).        |
| `open`                 | Boolean                                                             | `false`          | Whether the menu is open.                                         |
| `quick`                | Boolean                                                             | `false`          | Whether to skip open/close animations.                            |
| `align`                | [Placement](https://floating-ui.com/docs/computePosition#placement) | `'bottom-start'` | Menu alignment relative to trigger (e.g., 'top', 'bottom-start'). |
| `alignStrategy`        | [Strategy](https://floating-ui.com/docs/computePosition#strategy)   | `'absolute'`     | Positioning strategy (`'absolute'` or `'fixed'`).                 |
| `offset`               | Number                                                              | `0`              | Offset from the trigger element in pixels.                        |
| `keepOpenBlur`         | Boolean                                                             | `false`          | Whether to keep menu open when focus is lost.                     |
| `keepOpenClickItem`    | Boolean                                                             | `false`          | Whether to keep menu open when an item is clicked.                |
| `keepOpenClickAway`    | Boolean                                                             | `false`          | Whether to keep menu open when clicking outside.                  |
| `noListControl`        | Boolean                                                             | `false`          | Whether to disable list keyboard navigation control.              |
| `noFocusControl`       | Boolean                                                             | `false`          | Whether to disable automatic focus management.                    |
| `tabIndex`             | Number                                                              | `0`              | The tab index of the menu element.                                |

## Methods

| Name                 | Parameters | Description                        |
| -------------------- | ---------- | ---------------------------------- |
| `show()`             |            | Open the menu.                     |
| `close()`            |            | Close the menu.                    |
| `focusFirstItem()`   |            | Focus the first item in the menu.  |
| `focusLastItem()`    |            | Focus the last item in the menu.   |
| `focusItem(item)`    | `item`     | Focus a specific item in the menu. |

## Events

| Name         | Type                | Description                               |
| ------------ | ------------------- | ----------------------------------------- |
| `open`       | Event               | Fired when the menu is opened.            |
| `close`      | Event               | Fired when the menu is closed.            |
| `select`     | MenuSelectEvent     | Fired when a menu item has been selected. |
| `item-focus` | MenuItemFocusEvent  | Fired when a menu item is focused.        |
