let nameInput = document.getElementById("name");
let detInput = document.getElementById("details");
let timeInput = document.getElementById("time");
let addingBtn = document.getElementById("add-todo");
let todoContainer = document.querySelector(".todoList");
let tdForm = document.getElementById("todoForm");
let add = document.getElementById("add");

add.addEventListener("click", function() {
  tdForm.style.display = "block";
});