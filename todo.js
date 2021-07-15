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
  const checkButton = document.createElement("button");
  deleteButton.id = "delete-button";
  checkButton.id = "check-button";
  span.innerText = userToDo.text;
  deleteButton.innerText = "✗";
  checkButton.innerText = "✓";
  deleteButton.addEventListener("click", deleteToDo);
  checkButton.addEventListener("click", successToDo);
  li.appendChild(checkButton);
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

function successToDo(event){
  const toDone = event.target.parentElement;
  toDone.remove();
  Swal.fire({
  icon: 'success',
  title: 'You did it!',
  text: 'Thank you for the great work today :)',
})
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(toDone.id));
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
