const Task = require('../models/task.model');

const getTaskName = async (req, res) => {

  try {
    const task = await Task.find({ name: req.body.name });

    res.send(task.post)

  } catch (error) {
    res.sendStatus(500).end();
  }
};

module.exports = {
  getTaskName
};
