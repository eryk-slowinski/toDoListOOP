class TasksCounter {
    static counter(divCounter) {
        const numberOfTasks = document.querySelectorAll("ul.taskslist li").length;
        if (numberOfTasks === 0) divCounter.textContent = "";
        else if (numberOfTasks === 1) divCounter.textContent = `${numberOfTasks} task left`;
        else divCounter.textContent = `${numberOfTasks} tasks left`;
    }
}