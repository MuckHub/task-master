const mongoose = require('mongoose');
const faker = require('faker');
const dbConnect = require('./src/config/dbConnect')
const Task = require('./src/models/task.model')
const Group = require('./src/models/group.model')
const User = require('./src/models/user.model')
dbConnect()
async function seedBase() {
  let user1 = await new User({
    login: 'Aleksei', password: '123', groups: [{ groupId: '3', groupName: 'bootcamp' }, { groupId: '2', groupName: 'work' }],
  }) 
  let user2 = await new User({
    login: 'Anton', password: '123', groups: [{ groupId: '3', groupName: 'bootcamp' }, { groupId: '2', groupName: 'work' }]
  })   
  let group1 = await new Group({name: 'bootcamp', image: 'http://placeimg.com/640/480', tasks: [{taskId: '0', taskName: 'Сделай мостик! Нужен фото пруф!'}, {taskId: '1', taskName: 'Virtual Beer Pong'}, {taskId: '3', taskName: 'Recreate a Famous Movie Scene'}] }) 
  let group2 = await new Group({ name: 'work', image: 'http://placeimg.com/640/480', tasks: [{ taskId: '3', taskName: 'Нарисуй ёлку'}, { taskId: '4', taskName: 'Испеки торт' }, { taskId: '5', taskName: 'Boss Bitch Fashion Show'}] }) 
  let task1 = await new Task({ name: 'Сделай мостик! Нужен фото пруф!', completed: [{ login: 'Aleksei'}], post: [{login: 'Aleksei', image: 'http://placeimg.com/640/480', likesCount: faker.random.number()} ]}) 
  let task2 = await new Task({name: 'Virtual Beer Pong', completed: [{ login: 'Anton'}], post: [{login: 'Anton', image: 'http://placeimg.com/640/480', likesCount: faker.random.number()} ]})   
  await user1.save()
  await user2.save()
  // await group1.save()
  // await group2.save()
  // await task1.save()
  // await task2.save()
}
seedBase();
module.exports = seedBase;
