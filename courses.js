function dropDownEvents() {
  const opts = document.getElementsByClassName("opts");
  for (const i of opts) {
    i.addEventListener("click", () => {
      let checkbox = i.parentNode.previousElementSibling;
      let label = checkbox.previousElementSibling;
      label.innerText = i.innerText;
      checkbox.checked = false;
    });
  }

  const radios = document.getElementsByClassName("check-drop");
  for (const i of radios) {
    i.addEventListener("click", () => {
      if (i.checked === true) {
        for (const j of radios) {
          if (j !== i) {
            j.checked = false;
          }
        }
      }
    });
  }
}

window.onload = function () {
  dropDownEvents();
};
