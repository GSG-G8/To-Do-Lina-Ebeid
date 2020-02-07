var addTodoForm = document.getElementById("add-todo");

let add = document.getElementById("add");
let close = document.getElementById("close");

////////////////////
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById("todo-container");
  var tasks = document.querySelector(".todos");

  var state = [
    { id: -3, description: "first todo" },
    { id: -2, description: "second todo" },
    { id: -1, description: "third todo" }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement("li");
    todoNode.setAttribute("class", "todo-task");
    tasks.appendChild(todoNode);

    // you will need to use addEventListener

    // add span holding description
    var desc = document.createElement("span");
    desc.setAttribute("class", "todo-task__details");
    desc.textContent = todo.description;
    todoNode.appendChild(desc);

    // this adds the delete button
    var deleteButtonNode = document.createElement("button");
    deleteButtonNode.textContent = "Delete";
    deleteButtonNode.addEventListener("click", function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markbtn = document.createElement("input");
    markbtn.type= 'radio';
    markbtn.id=`mark`
    // markbtn.textContent = "Mark";
    markbtn.addEventListener("click", function(event) {
      markbtn.checked = true;
      console.log("hi")
      var newState = todoFunctions.markTodo(state, todo.id);
      todoNode.style.background  = "red";
      update(newState);
    });
    todoNode.appendChild(markbtn);

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener("submit", function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      let text = event.target.elements[0];
      if (text.value !== "") {
        let nTodo = {
          id: todoFunctions.generateId(),
          description: text.value,
          done: false
        };

        text.value = "";

        // event.target ....

        // hint: todoFunctions.addTodo
        var newState = todoFunctions.addTodo(state, nTodo); // ?? change this!
        update(newState);
      }
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement("ul");
    todoListNode.className = "todos";

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
