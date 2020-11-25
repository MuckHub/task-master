require('dotenv').config()
const express = require('express');
const path = require('path');
const logger = require('morgan');
const sessionFileStore = require('session-file-store')
const session = require('express-session')
const app = express();
const dbConnect = require('./src/config/dbConnect')
const PORT = process.env.PORT || 3100
const cors = require('cors');

dbConnect()
app.set('session cookie name', 'sid')

app.use(cors())
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const FileStore = sessionFileStore(session)
app.use(session({
  name: app.get('session cookie name'),
  secret: process.env.SESSION_SECRET,
  store: new FileStore({
    secret: process.env.SESSION_SECRET,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24
  },
}))

app.listen(PORT, () => {
  console.log('Server has been started on port: ', PORT)
})

module.exports = app;
