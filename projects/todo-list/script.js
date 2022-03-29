const addTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskContent = document.getElementById('texto-tarefa');
const clearAllButton = document.getElementById('apaga-tudo');
const clearDoneButton = document.getElementById('remover-finalizados');

function createTask() {
  const newTask = document.createElement('li');
  newTask.innerText = taskContent.value;
  newTask.className = 'task';
  taskList.appendChild(newTask);
  taskContent.value = '';
}

addTask.addEventListener('click', createTask);

function selectTask(event) {
  const taskSelect = document.querySelectorAll('li');
  for (let i = 0; i < taskSelect.length; i += 1) {
    taskSelect[i].classList.remove('gray');
  }
  const taskSelected = event.target;
  taskSelected.classList.add('gray');
}

taskList.addEventListener('click', selectTask);

function markDone(event) {
  const taskCompleted = event.target;
  if (taskCompleted.classList.contains('completed')) {
    taskCompleted.classList.remove('completed');
  } else {
    taskCompleted.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', markDone);

function clearAll() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

clearAllButton.addEventListener('click', clearAll);

function clearDone() {
  const taskDone = document.querySelectorAll('.task');
  for (let i = 0; i < taskDone.length; i += 1) {
    if (taskDone[i].classList.contains('completed')) {
      taskDone[i].remove();
    }
  }
}

clearDoneButton.addEventListener('click', clearDone);
