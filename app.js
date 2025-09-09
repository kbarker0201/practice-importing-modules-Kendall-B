const path = require('path');
const fileHandler = require('./fileHandler');
const taskManager = require('./taskManager');

const filePath = path.join(__dirname, "tasks.json");
let tasks = fileHandler.loadTasks(filePath);

taskManager.addTask(tasks, "Laundry");
taskManager.addTask(tasks, "Dishes");

taskManager.listTasks(tasks);
fileHandler.saveTasks(filePath, tasks);