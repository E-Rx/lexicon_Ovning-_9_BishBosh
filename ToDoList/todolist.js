document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("itemInput");
  const addButton = document.getElementById("addButton");
  const list = document.getElementById("itemList");
  const clearListBtn = document.getElementById("clearListBtn");

  function createItem(text) {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const contentSpan = document.createElement("span");
    contentSpan.className = "clickable-item";

    const statusIcon = document.createElement("span");
    statusIcon.className = "status-icon";
    statusIcon.textContent = "○";

    const textSpan = document.createElement("span");
    textSpan.textContent = text;

    // Toggle purchased
    contentSpan.addEventListener("click", function () {
      li.classList.toggle("purchased");
      statusIcon.textContent = li.classList.contains("purchased") ? "✔" : "○";
    });

    contentSpan.appendChild(statusIcon);
    contentSpan.appendChild(textSpan);

    // Remove item
    const removeBtn = document.createElement("span");
    removeBtn.textContent = "✖";
    removeBtn.className = "remove-btn ms-2";

    removeBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      li.remove();
    });

    li.appendChild(contentSpan);
    li.appendChild(removeBtn);
    list.appendChild(li);
  }

  // Add item
  addButton.addEventListener("click", function () {
    const value = input.value.trim();
    if (value !== "") {
      createItem(value);
      input.value = "";
      input.focus();
    }
  });

  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addButton.click();
    }
  });

  // Clear all items
  clearListBtn.addEventListener("click", function () {
    list.innerHTML = "";
  });
});
