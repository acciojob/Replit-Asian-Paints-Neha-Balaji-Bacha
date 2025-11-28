//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  const items = document.querySelectorAll("#grid-item");

  // make all transparent first
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });

  // find the correct box
  items.forEach(item => {
    if (item.getAttribute("data-id") == blockId) {
      item.style.backgroundColor = color;
    }
  });
});

resetBtn.addEventListener("click", () => {
  const items = document.querySelectorAll("#grid-item");
  items.forEach(item => {
    item.style.backgroundColor = "transparent";
  });
});