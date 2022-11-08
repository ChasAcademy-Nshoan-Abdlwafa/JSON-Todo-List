let list = document.getElementById("list");
appendList();
/* let x = list[8]; */
function appendList() {
  return fetch(
    "https://raw.githubusercontent.com/ChasAcademy-Nshoan-Abdlwafa/JSON-Todo-List/main/data.json"
  )
    .then((result) => result.json()) // skapa JSON-data, "jsonifiera"
    .then((content) => {
      // färdigt JSON-objekt att använda
      /* Skapa for-loop, som går igenom varje element i listan
      första delen: var ska man börja iterera, här börjar vi på allra första elementet, dvs. i = 0
      andra delen: när ska vi sluta, här slutar vi när vi har nått sista elementet
      tredje delen: hur många steg per iteration, här vill vi iterera över varje enskild listelement, så i++ (i += 1)*/
      for (let i = 0; i < content.todolist.length; i++) {
        // Skapa upp ett li-objekt i html, via javascript
        let listItem = document.createElement("li");

        // populera skapade li-elementet med värdet från ditt JSON-data
        let todoListItem = content.todolist[i];
        listItem.innerHTML = todoListItem.ToDo;

        if (todoListItem.completed) {
          listItem.classList.add("checked");
          listItem.classList.add("checkmark");
        }

        // lägg till ditt li-element till din ul-lista, som du hämtade in från HTML-dokumentet
        list.appendChild(listItem);
      }
    });
}
