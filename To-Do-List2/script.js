document.addEventListener("DOMContentLoaded", () => {
  const addTaskButton = document.querySelector(".addTaskButton");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("li");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskItem.appendChild(taskContent);

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "completeButton";
    completeButton.addEventListener("click", () => {
      taskContent.classList.toggle("completed");
    });
    taskItem.appendChild(completeButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });
    taskItem.appendChild(removeButton);

    taskList.appendChild(taskItem);
  }
});
