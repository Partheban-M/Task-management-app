const Task = require('../models/Task');

const createTask = async (taskData, userId) => {
  const task = await Task.create({
    title: taskData.title,
    description: taskData.description,
    user: userId,
  });

  return task;
};

const getTasks = async (userId) => {
  const tasks = await Task.find({ user: userId });

  return tasks;
};

module.exports = {
  createTask,
  getTasks,
};