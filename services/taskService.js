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
const updateTask = async (taskId, userId, updateData) => {
  const task = await Task.findOneAndUpdate(
    {
      _id: taskId,
      user: userId,
    },
    updateData,
    {
      new: true,
    }
  );

  if (!task) {
    throw new Error('Task not found');
  }

  return task;
};
const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({
    _id: taskId,
    user: userId,
  });

  if (!task) {
    throw new Error('Task not found');
  }

  return task;
};


module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,

};