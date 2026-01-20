---
title: Ripple - SEE
---

# Ripple

<ul id="toc"></ul>

Ripples are state layers used to communicate the status of a component or interactive element.

A state layer is a semi-transparent covering on an element that indicates its state. A layer can be applied to an entire element or in a circular shape.

## Interactive Demo

<sw-demo>
  <style>
    .row {
      align-items: center;
      display: flex;
      gap: 32px;
    }

    .container {
      align-items: center;
      border-radius: 24px;
      display: flex;
      height: 64px;
      justify-content: center;
      outline: 1px solid var(--md-sys-color-outline);
      padding: 16px;
      position: relative;
      width: 64px;
    }

    .container:has(.unbounded) {
      border-radius: 50%;
      outline-style: dashed;
    }

    .anchor {
      background: var(--md-sys-color-primary-container);
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 50%;
      height: 24px;
      width: 24px;

      /* Recommended styles for an unbounded ripple's anchor. */
      display: grid;
      place-items: center;
      position: relative;
    }

    md-ripple.unbounded {
      height: 64px;
      width: 64px;

      /* Recommended styles for an unbounded ripple. */
      border-radius: 50%;
      inset: unset;
    }
  </style>
  <div class="row">
    <div class="container">
      <md-ripple></md-ripple>
    </div>

    <div class="container" id="touch">
      <div class="anchor">
        <md-ripple for="touch" class="unbounded"></md-ripple>
      </div>
    </div>
  </div>
</sw-demo>

### Usage

Ripples display on press pointer interactions. They may be attached to a control in one of three ways.

1. Attached to the parent element
   <sw-demo>
     <button style="position: relative">
       <md-ripple></md-ripple>
       Button
     </button>
   </sw-demo>

2. Attached to a referenced element
   <sw-demo>
     <div style="position: relative">
       <md-ripple for="ripple-control-input" enterbehavior="none" spacebehavior="none"></md-ripple>
       <input id="ripple-control-input" />
     </div>
   </sw-demo>

3. Attached imperatively
   <sw-demo>
     <div style="position: relative">
       <md-ripple id="ripple"></md-ripple>
       <br />
       <button id="ripple-control">Button</button>
       <br />
       <br />
     </div>
     <script>
       const ripple = document.querySelector('#ripple');
       const control = document.querySelector('#ripple-control');
       onload = () => ripple.attach(control);
     </script>
   </sw-demo>

Note: ripples must be placed within a `position: relative` container.
