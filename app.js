//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Functions
const completeCheck = (e) => {
  const item = e.target;

   if(item.classList[0] === "complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
};

const deleteCheck = (e) => {
  const item = e.target;

  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  } 
};

const addTodo = (event) => {
  event.preventDefault();
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerHTML = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
 //Add todo to localStorage
  saveLocalTodos(todoInput.value);
  //add buttons
  const completeButton = document.createElement("button");
  completeButton.innerHTML ='<i class="fas fa-check"></li';
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML ='<i class="fas fa-trash"></li';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  //clear input
  todoInput.value = "";
  //attach  functions to buttons
  completeButton.addEventListener('click', completeCheck);
  trashButton.addEventListener('click', deleteCheck);
};

const filterTodo = (e) => {
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(e.target.value){
      case "all":
        todo.style.display = 'flex';
        break;
      case "completed":
        if(todo.classList.contains("completed")){
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none'; 
        }
        break; 
        case "uncompleted":
          if(!todo.classList.contains("completed")){
            todo.style.display = 'flex';
          } else {
            todo.style.display = 'none'; 
          }
          break; 
    }
  });
}

const saveLocalTodos = (todo) => {
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

const getTodos = (todo) => {
  let todos;
  
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }

  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML = todo; 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //add buttons
    const completeButton = document.createElement("button");
    completeButton.innerHTML ='<i class="fas fa-check"></li';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
  
    const trashButton = document.createElement("button");
    trashButton.innerHTML ='<i class="fas fa-trash"></li';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    //attach  functions to buttons
    completeButton.addEventListener('click', completeCheck);
    trashButton.addEventListener('click', deleteCheck);
  });
}

const removeLocalTodos = (todo) =>{
  let todos;
  
  if(localStorage.getItem('todos') === null){
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'))
  }
  const todoIndex = todo.children[0].innerHTML;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
//Events
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
filterOption.addEventListener("click", filterTodo);