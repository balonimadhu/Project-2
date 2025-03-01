const inputField = document.getElementById("inputTask");
const todolist = document.getElementById("taskList");

function addTask() {
  const taskValue = inputField.value.trim();
  if (taskValue === "") return; 

 
  const listItem = document.createElement("li");
  listItem.textContent = taskValue;
  todolist.appendChild(listItem);
  addDeleteButton(listItem);
  
  inputField.value = ""; 
  saveData(); 
}

const addDeleteButton = (listItem) => {
  const dltButton = document.createElement("button");
  dltButton.textContent = "Delete";
  listItem.appendChild(dltButton);
  dltButton.onclick = function () {
    listItem.remove(); 
    saveData(); 
  };
};

const saveData = () => {
  const tasks = [];
  const items = todolist.getElementsByTagName("li");
  for (let item of items) {
    tasks.push(item.firstChild.textContent); 
  }
  localStorage.setItem("tasks", JSON.stringify(tasks)); 
};

const showTask = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
  for (let task of tasks) {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    todolist.appendChild(listItem);
    addDeleteButton(listItem);
  }
};


window.onload = showTask;
