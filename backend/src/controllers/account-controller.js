const User = require('../models/user.model');

const account = async (req, res) => {

  // const { user } = req.body
  console.log('user back>>>>', req.body);
  console.log('req.body.user  back>>>>', req.body.user);

  try {
    const user = await User.findOne({ login: req.body.user });

    console.log('user groups >>>>', user.groups);
    res.send(user.groups)

  } catch (error) {
    res.sendStatus(500).end();
  }
};

module.exports = {
  account
};
