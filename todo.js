const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

function toDoSubmit(event){
  event.preventDefault();
  const userToDo = toDoInput.value;
  toDoInput.value = "";
  const userToDoObj = {
    text: userToDo,
    id: Date.now()
  };
  toDos.push(userToDoObj);
  paintToDo(userToDoObj);
}

function paintToDo(userToDo){
  const li = document.createElement("li");
  li.id = userToDo.id;
  li.className = "todo-list";
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.id = "delete-button";
  span.innerText = userToDo.text;
  deleteButton.innerText = "✗";
  deleteButton.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(deleteButton);
  toDoList.appendChild(li);
  saveToDo();
}

function deleteToDo(event){
  const wantToDelete = event.target.parentElement;
  wantToDelete.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(wantToDelete.id));
  saveToDo();
}

toDoForm.addEventListener("submit", toDoSubmit);

function saveToDo(){
  localStorage.setItem("ToDo", JSON.stringify(toDos))
}

const saveToDos = localStorage.getItem("ToDo");

if (saveToDos !== null){
  const parsedToDo = JSON.parse(saveToDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
