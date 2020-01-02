class AddingTasks {
    static addTask(inputAdd, tasksList) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = inputAdd.value;
        deleteButton.textContent = '\xD7';
        tasksList.appendChild(li).appendChild(deleteButton);
    }
}