// Add a task to the tasks list
function addTask (tasks, task) {
    tasks.push(task);
}

// Print all tasks
function listTasks(tasks) {
    console.log(tasks);
}

module.exports = {addTask, listTasks};