myList();

function myList() {
  return fetch(
    "https://raw.githubusercontent.com/ChasAcademy-Nshoan-Abdlwafa/JSON-Todo-List/main/data.json"
  )
    .then((result) => result.json())
    .then((content) => {
      console.log(content);
    });
}

let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
