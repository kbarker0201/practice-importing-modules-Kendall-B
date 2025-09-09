const fs = require('fs');

// Come back if there's an error
function saveTasks(filePath, tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks));
    console.log("Tasks saved successfully!")
}


// Come back if error
function loadTasks(filePath) {
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const readTasks = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(readTasks);
}

module.exports = {saveTasks, loadTasks};