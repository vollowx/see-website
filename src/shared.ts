import "@vollowx/see";
import "./components/demo.ts";
import "./components/toolbar.ts";

// Generate table of contents
(() => {
  const headings = document
    .querySelector("main")
    .querySelectorAll("h2, h3, h4, h5, h6"); // Exclude h1 from TOC
  const container = document.getElementById("toc");

  if (!container) return;

  let currentContainers = [container];
  let higherIds = [];

  headings.forEach((heading) => {
    let level = Number(heading.localName.replace("h", ""));
    let title = heading.textContent;

    let selfId = (heading.textContent || "").toLowerCase().replace(/ /g, "-");
    higherIds[level - 1] = selfId;

    let formattedId = [...higherIds.slice(0, level - 1), selfId].join("-");

    heading.setAttribute("id", formattedId);

    let link = document.createElement("a");
    link.setAttribute("href", "#" + formattedId);
    link.textContent = title;

    let item = document.createElement("li");
    item.appendChild(link);

    // Adjust level for h2-based TOC (h2 is now level 1 in the TOC)
    let tocLevel = level - 1;
    
    if (tocLevel === 1) {
      container.appendChild(item);
      currentContainers[tocLevel] = item;
    } else {
      // Check if we need to create a new list at this level
      let parentItem = currentContainers[tocLevel - 1];
      let existingList = parentItem.querySelector(":scope > ol");

      if (!existingList) {
        existingList = document.createElement("ol");
        parentItem.appendChild(existingList);
      }

      existingList.appendChild(item);
      currentContainers[tocLevel] = item;
    }
  });
})();

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
        
        // Handle different control types
        if (tagName === "md-switch") {
          // For switches, use event.detail
          (interactive as any)[propertyName] = event.detail;
        } else if (tagName === "md-outlined-select" || tagName === "md-filled-select") {
          // For selects, use target.value
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
