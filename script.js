const inputField = document.querySelector("#inputField");
// Lag en variabel som henter elementet med ID addButton
// Lag en variabel som henter elementet med ID todoList
const addButton = document.querySelector("#addButton");
const todoList = document.querySelector("#todoList");
console.log(inputField, addButton, todoList);

addButton.addEventListener("click", function () {
    console.log("Legg til knappen er trykket!");

    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    const todoItem = document.createElement("li");
    todoItem.textContent = inputFieldValue;
    todoList.appendChild(todoItem);

    inputField.value = "";

    // Lag en variabel som lager en knapp for Ferdig
    const doneItem = document.createElement("button");
    doneItem.textContent = "Ferdig";
    todoItem.appendChild(doneItem);
    doneItem.addEventListener("click", function () {
        console.log("Ferdig knapp er trykket!");

        if (todoItem.classList.contains("done")) {
            todoItem.classList.remove("done");
        } else {
            todoItem.classList.add("done");
        };
    });

    const deleteItem = document.createElement("button");
    deleteItem.textContent = "Slett";
    todoItem.appendChild(deleteItem);
    deleteItem.addEventListener("click", function () {
        console.log("Slett knapp er trykket!");

        if (todoItem.classList.contains("done")) {
            todoItem.remove();
        } else {
            alert("Gjøremålet må markeres ferdig før sletting");
        };
    });
});