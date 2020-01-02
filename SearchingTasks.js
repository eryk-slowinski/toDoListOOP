class SearchingTasks {
    static searchTask(inputSearch) {
        const tasksList = [...document.querySelectorAll("ul.taskslist li")];
        tasksList.forEach(li => li.classList.remove('active'));
        const liList = tasksList.filter(li => li.textContent.includes(inputSearch.toLowerCase()));
        if (inputSearch !== "") liList.forEach(li => li.classList.add('active'));
    }
}