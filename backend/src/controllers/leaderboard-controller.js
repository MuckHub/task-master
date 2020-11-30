const Group = require('../models/group.model');
const Task = require('../models/task.model');

const leaderboard = async (req, res) => {
  console.log(req.body.group);
  try {
    
    const allTasks = await Group.findOne({ name: req.body.group });
    let arr = [];
    for (let i = 0; i < allTasks.tasks.length; i++) {
      for (let y = 0; y < allTasks.tasks[i].completed.length; y++) {
        arr.push(allTasks.tasks[i].completed[y]);
      }
    }

    let result = [];
    for (let el of arr) {
      result.push({ el });
    }

    let counter = {};
    result.forEach(function (obj) {
      let key = obj.el;
      counter[key] = (counter[key] || 0) + 5;
    });

    let finalResult = [];
    for (var prop in counter) {
      if (Object.prototype.hasOwnProperty.call(counter, prop)) {
        finalResult.push({ login: prop, points: counter[prop] });
      }
    }

  }
  // console.log(finalResult);
  res.send(finalResult);
 

  } catch (error) {
    res.sendStatus(500).end();
  }
};

module.exports = {
  leaderboard,
};
