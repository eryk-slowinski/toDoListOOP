class ToDoList {
    constructor() {
        this.inputAdd = document.querySelector("div.add input");
        this.tasksList = document.querySelector(".taskslist");
        this.addButton = document.querySelector("div.add button");
        this.inputSearch = document.querySelector("div.search input");
        this.counter = document.querySelector("div.counter");

        this.addButton.addEventListener('click', () => {
            if (this.inputAdd.value !== "") AddingTasks.addTask(this.inputAdd, this.tasksList);
            TasksCounter.counter(this.counter);
        });

        this.inputAdd.addEventListener('keyup', (e) => {
            if (e.keyCode === 13 && this.inputAdd.value !== "") AddingTasks.addTask(this.inputAdd, this.tasksList);
            TasksCounter.counter(this.counter);
        });

        this.inputSearch.addEventListener('input', () => {
            SearchingTasks.searchTask(this.inputSearch.value);
        })

        RemovingTask.removeTask(this.tasksList, this.counter);
    }
}