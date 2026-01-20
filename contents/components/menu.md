---
title: Menu - SEE
---

# Menu

<ul id="toc"></ul>

Menus display a list of choices on a temporary surface. They appear when users interact with a button, action, or other control.

## Interactive Demo

<sw-demo hascontrols>
  <span style="position: relative; display: inline-block">
    <md-button id="menu-interactive-btn">Open Controlled Menu</md-button>
    <md-menu id="menu-interactive" for="menu-interactive-btn">
      <md-menu-item>Item 1</md-menu-item>
      <md-menu-item>Item 2</md-menu-item>
      <md-menu-item>Item 3</md-menu-item>
    </md-menu>
  </span>

  <label slot="controls" for="menu-properties-keepOpenBlur">
    Keep Open (Focus Lost)
    <md-switch id="menu-properties-keepOpenBlur"></md-switch>
  </label>

  <label slot="controls" for="menu-properties-keepOpenClickItem">
    Keep Open (Click Item)
    <md-switch id="menu-properties-keepOpenClickItem"></md-switch>
  </label>

  <label slot="controls" for="menu-properties-keepOpenClickOutside">
    Keep Open (Click Outside)
    <md-switch id="menu-properties-keepOpenClickOutside"></md-switch>
  </label>

  <label slot="controls" for="menu-properties-quick">
    Quick
    <md-switch id="menu-properties-quick"></md-switch>
  </label>

  <label slot="controls" for="menu-properties-align">
    Align
    <md-outlined-select name="align" id="menu-properties-align" value="bottom-start">
      <md-option value="top">top</md-option>
      <md-option value="top-start">top-start</md-option>
      <md-option value="top-end">top-end</md-option>
      <md-option value="bottom">bottom</md-option>
      <md-option value="bottom-start">bottom-start</md-option>
      <md-option value="bottom-end">bottom-end</md-option>
      <md-option value="right">right</md-option>
      <md-option value="right-start">right-start</md-option>
      <md-option value="right-end">right-end</md-option>
      <md-option value="left">left</md-option>
      <md-option value="left-start">left-start</md-option>
      <md-option value="left-end">left-end</md-option>
    </md-outlined-select>
  </label>
</sw-demo>

### Usage

<sw-demo>
  <span style="position: relative; display: inline-block">
    <md-button id="some-menu-btn">Menu with Anchor Set</md-button>
    <md-menu id="some-menu" for="some-menu-btn">
      <md-menu-item id="item-new-text-file">New Text File</md-menu-item>
      <md-menu-item id="item-new-file">New File...</md-menu-item>
      <md-menu-item id="item-new-window">New Window</md-menu-item>
      <md-divider></md-divider>
      <md-menu-item id="item-open-file">Open File...</md-menu-item>
      <md-menu-item id="item-open-folder">Open Folder...</md-menu-item>
      <md-divider></md-divider>
      <md-menu-item id="item-save">Save</md-menu-item>
      <md-menu-item id="item-save-as">Save As...</md-menu-item>
    </md-menu>
  </span>

  <label style="display: block">event:
    <input type="text" readonly id="some-menu-fires" />
  </label>

  <script>
    const menuButton = document.getElementById('some-menu-btn');
    const menuOutput = document.getElementById('some-menu-fires');
    const menu = document.getElementById('some-menu');

    menuButton.addEventListener('click', () => {
      menu.open = !menu.open;
    });

    menu.addEventListener('select', (e) => {
      menuOutput.value = `select: { index: ${e.detail.index}, item: #${e.detail.item.id}\n}`;
    });
  </script>
</sw-demo>
