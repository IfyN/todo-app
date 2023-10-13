// @ts-check

// data store
let tasks = [];

// task id. We increment this value after creating each new task
let id = 1;

function createTodo(task) {
  tasks.push({
    id: id,
    task: task,
    done: false,
  });

  id = id + 1;
}

function getAllTodos() {
  return tasks;
}

/**
 * @params {boolean} done - status to filter by
 * @returns {Array}
 */
function filterTodos(done) {
  let filtered = [];

  for (let i = 0; i < tasks.length; i++) {
    const todo = tasks[i];
    if (todo.done === done) {
      filtered.push(todo);
    }
  }
  return filtered;
}

/**
 * @params {string}
 *
 */

function deleteTodo(id) {
  for (let i = 0; i < tasks.length; i++) {
    let taskItem = tasks[i];
    if (taskItem.id === id) {
      tasks.splice(i, 1);
    }
  }
}

/**
 * @example findByTask('play')
 * @param {string} task
 * @returns {Array} array of todos that match the task
 */
function findByTask(task) {
  let foundTasks = [];

  for (let i = 0; i < tasks.length; i++) {
    let currentItem = tasks[i];
    if (currentItem.task === task) {
      foundTasks.push(currentItem);
    }
  }
  return foundTasks;
}

/**
 * @params {number} id - Id of the task to update
 */
function updateStatus(id) {
  for (let i = 0; i < tasks.length; i++) {
    let selectedTask = tasks[i];
    if (selectedTask.id === id) {
      selectedTask.done = !selectedTask.done;
    }
  }
}


