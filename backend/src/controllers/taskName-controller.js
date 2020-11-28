const Task = require('../models/task.model');

const getPosts = async (req, res) => {

  try {
    const task = await Task.findOne({ name: req.body.taskName });
    res.send(task.post)

  } catch (error) {
    res.sendStatus(500).end();
  }
};

module.exports = {
  getPosts
};
