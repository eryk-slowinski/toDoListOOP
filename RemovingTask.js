class RemovingTask {
    static removeTask(tasksList, counter) {
        tasksList.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') return;
            else e.target.parentNode.remove();
            TasksCounter.counter(counter);
        }
    }
}