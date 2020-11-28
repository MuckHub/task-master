require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const sessionFileStore = require('session-file-store');
const session = require('express-session');
const app = express();
const dbConnect = require('./src/config/dbConnect');
const PORT = process.env.PORT || 3100;
const cors = require('cors');
const User = require('./src/models/user.model');
const Tasks = require('./src/models/task.model');

const accountRouter = require('./src/routes/account');
const taskNameRouter = require('./src/routes/taskName')
const groupTasksRouter = require('./src/routes/getTasks');
const allTasksRouter = require('./src/routes/allTasks');



dbConnect();
app.set('session cookie name', 'sid');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/auth', async (req, res) => {
  try {
    if (req.body.login && req.body.pass) {
      const user = await User.findOne({ login: req.body.login });
      if (user && user.password === req.body.pass) {
        res.status(200).send('Logged in!');
      } else {
        res.status(401).send('Invalid credentials!');
      }
    } else {
      res.status(400).send('Fill the form');
    }
  } catch (e) {
    res.status(404).send('Something went wrong');
  }
});

app.use('/account', accountRouter)
app.use('/taskName', taskNameRouter)

app.post('/register', async (req, res) => {
  const { login, pass } = req.body;

  try {
    let newUser = User.create({
      login,
      password: pass,
    });

    return res.json({
      login: newUser.login,
      status: 'ok',
    });
  } catch (error) {
    return res.json({ error: 'Oops!' });
  }
});


app.post('/addImg', async (req, res) => {
  const { taskName, user, imgUrl } = req.body;

  try {
    await Tasks.updateOne(
      { name: taskName },
      {
        $push: {
          post: {
            login: user,
            image: imgUrl,
            likesCount: 0,
          },
        },
      }
    );

    res.end();
  } catch (error) {
    res.end();
  }
});

app.use('/groupTasks', groupTasksRouter)
app.use('/allTasks', allTasksRouter)




app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT);
});

module.exports = app;
