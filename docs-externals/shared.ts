import "@vollowx/seele";
import "./components/demo.ts";
import "./components/toolbar.ts";

// Auto-detect and bind all interactive demos
(() => {
  const demos = document.querySelectorAll("sw-demo[hascontrols]");
  
  demos.forEach((demo) => {
    // Find the interactive element (main controlled element)
    const interactive = demo.querySelector("[id$='-interactive']");
    if (!interactive) {
      console.warn('Interactive demo missing element with id ending in "-interactive"', demo);
      return;
    }
    
    // Extract the base name from the interactive element's ID
    // e.g., "button-interactive" -> "button"
    const baseName = interactive.id.replace(/-interactive$/, "");
    
    // Special handling for menu - set up the button trigger
    if (interactive.tagName.toLowerCase() === "md-menu") {
      const menuBtn = demo.querySelector(`#${baseName}-interactive-btn`);
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          (interactive as any).open = !(interactive as any).open;
        });
      }
    }
    
    // Find all property controls in the controls slot
    const controls = demo.querySelectorAll(`[slot='controls'] [id^='${baseName}-properties-']`);
    
    controls.forEach((control) => {
      // Extract property name from control ID
      // e.g., "button-properties-size" -> "size"
      const propertyName = control.id.replace(`${baseName}-properties-`, "");
      
      // Determine event type based on control tag name
      const tagName = control.tagName.toLowerCase();
      let eventType = "change";
      
      if (tagName === "md-outlined-text-field" || tagName === "md-filled-text-field") {
        eventType = "input";
      }
      
      // Bind the control to the interactive element
      control.addEventListener(eventType, (e) => {
        const target = e.target as any;
        const event = e as any;

        if (tagName === "md-switch") {
          (interactive as any)[propertyName] = event.detail;
        } else if (tagName === "md-outlined-select" || tagName === "md-filled-select") {
          (interactive as any)[propertyName] = target.value;
        } else if (tagName === "md-outlined-text-field" || tagName === "md-filled-text-field") {
          // For text fields, handle special cases
          if (propertyName === "label") {
            // Special handling for label property
            const labelElement = interactive.querySelector("span");
            if (labelElement) {
              labelElement.textContent = target.value;
            }
          } else {
            (interactive as any)[propertyName] = target.value;
          }
        }
      });
    });
  });
})();
