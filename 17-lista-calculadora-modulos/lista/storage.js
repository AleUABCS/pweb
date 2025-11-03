let tasksArray = [];

export function saveStorage (tasksArray) {
    localStorage.setItem("tasks", JSON.stringify(tasksArray))
}

export function getStorage () {
    return JSON.parse(localStorage.getItem("tasks"));
}

export function pushStorage (task) {
    console.log(tasksArray)
    const newLocal = tasksArray = getStorage();
    tasksArray.push(task);
    saveStorage(tasksArray);
}