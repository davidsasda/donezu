const router = require('express').Router();
const User = require('../Model/User.js');

router.post('/:email', async (req, res) => {
  console.log('Donezu Create - Pinged');
  let {task} = req.body
  let {email} = req.params;

  let user = await User.findOne({email: email}, 'tasks');
  user.tasks.push(task);
  let update = await User.updateOne(
    {email: email},
    {$set: user}
  );
  if (!update) {
    console.log('Donezu Create - Error');
    res.status(500).send();
  } else {
    console.log('Donezu Create - Successful');
    res.status(201).send();
  }
})

router.get('/:email', async (req, res) => {
  console.log('Donezu Read - Pinged');
  let {email} = req.params;

  let data = await User.find({email: email}, 'tasks');
  if (!data) {
    console.log('Donezu Read - Error');
    res.status(500).send();
  } else {
    console.log('Donezu Read - Successful');
    res.status(200).send(data[0].tasks);
  }
});

router.delete('/:email/:index', async (req, res) => {
  console.log('Donezu Delete - Pinged');
  let {email, index} = req.params;

  let user = await User.findOne({email: email}, 'tasks');

  if (!user) {
    console.log('Donezu Delete - Error');
    res.status(500).send(err);
  } 

  user.tasks.splice(index, 1);

  let data = await User.updateOne(
    {'email': email},
    {$set: user}
  );

  if (data) {
    console.log('Donezu Delete - Successful');
    res.status(200).send();
  }
});

module.exports = router;

// const createTask = async (email, task, cb) => {
//   let user = await User.findOne({'email': email}, 'tasks');
//   user.tasks.push(task);
//   let data = await User.updateOne(
//     {'email': email},
//     {$set: user}
//   );
//   cb(null, data);
// };

// const readTask = async (email, cb) => {
//   let data = await User.find({'email': email}, 'tasks');
//   data.length ? cb(null, data[0]) : cb('error', null);
// }

// const deleteTask = async (email, index, cb) => {
//   let user = await User.findOne({'email': email}, 'tasks');
//   user.tasks.splice(index, 1);
//   let data = await User.updateOne(
//     {'email': email},
//     {$set: user}
//   );
//   cb(null, data);
// }