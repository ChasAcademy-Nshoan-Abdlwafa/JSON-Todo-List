let list = document.getElementById("list");
appendList();
/* let x = list[8]; */
function appendList() {
  return fetch(
    "https://raw.githubusercontent.com/ChasAcademy-Nshoan-Abdlwafa/JSON-Todo-List/main/data.json"
  )
    .then((result) => result.json()) // Skapar JSON-data, "jsonifierar"
    .then((content) => {
      // Färdigt JSON-objekt, redo att användas

      for (let i = 0; i < content.todolist.length; i++) {
        // Skapar for-loop, som går igenom varje element i listan
        // Första delen (let i = 0;): vart det ska börja iterera, här börjar det på allra första elementet, dvs. i = 0
        // Andra delen (i < content.todolist.length;): när det ska sluta iterera, här avslutas itererationen när den har nått det sista elementet
        // Tredje delen (i++): hur många steg per iteration, här itereras det över varje enskild listelement, så i++ (i += 1)

        let listItem = document.createElement("li"); // Skapar ett li-objekt i HTML, via JavaScript

        let todoListItem = content.todolist[i];
        listItem.innerHTML = todoListItem.ToDo; // Populera skapade li-elementet med värdena från JSON-datan

        if (todoListItem.completed) {
          listItem.classList.add("checked");
          listItem.classList.add("checkmark");
        }

        list.appendChild(listItem); // Lägger till li-element till ul-listan som hämtades in från HTML-dokumentet
      }
    });
}
