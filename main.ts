(() => {
  const headings = document
    .querySelector("main")
    .querySelectorAll("h2, h3, h4, h5, h6");
  const container = document.getElementById("toc");

  let currentContainers = [container];
  let higherIds = [];

  headings.forEach((heading) => {
    let level = Number(heading.localName.replace("h", "")) - 1;
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

    // Get or create the appropriate container for this level
    if (level === 1) {
      container.appendChild(item);
      currentContainers[level] = item;
    } else {
      // Check if we need to create a new list at this level
      let parentItem = currentContainers[level - 1];
      let existingList = parentItem.querySelector(":scope > ol");

      if (!existingList) {
        existingList = document.createElement("ol");
        parentItem.appendChild(existingList);
      }

      existingList.appendChild(item);
      currentContainers[level] = item;
    }
  });
})();

import "@vollowx/see";
import "./components/demo.js";
import "./components/toolbar.js";
