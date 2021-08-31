//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Functions
const addTodo = (event) => {
  event.preventDefault();
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerHTML = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //check mark button
  const completeButton = document.createElement("button");
  completeButton.innerHTML ='<i class="fas fa-check"></li';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  const trashButton = document.createElement("button");
  trashButton.innerHTML ='<i class="fas fa-trash"></li';
  trashButton.classList.add('complete-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
};


//Events
todoButton.addEventListener("click", addTodo);


