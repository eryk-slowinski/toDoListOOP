class RemovingTask {
    static removeTask(tasksList) {
        tasksList.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON') return;
            else e.target.parentNode.remove();
        }
    }
}