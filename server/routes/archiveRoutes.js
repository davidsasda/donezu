const router = require('express').Router();

const User = require('../models/User.js');

router.post('/:email/:year/:month/:day', async (req, res) => {
  console.log('Donezu Archive Create - Pinged');
  let {email, year, month, day} = req.params;
  let task = req.body;

  let user = await User.findOne({'email': email}, 'archives');

  if (!user) {
    console.log('Donezu Archive Create - Error');
    res.status(500).send();
  }

  if (user.archives[year] && user.archives[year][month] && user.archives[year][month][day]) {
    console.log(`${year}.${month}.${day} exists`);
    user.archives[year][month][day].push(task);
  } else {
    console.log('creating new date');
    if (!user.archives[year]) {
      user.archives[year] = {
        [month]: {
          [day]: null
        }
      }
    }
    if (!user.archives[year][month]) {
      user.archives[year][month] = {
        [day]: null
      }
    }
    user.archives[year][month][day] = [task];
  }

  let data = await User.updateOne(
    {'email': email},
    {$set: user}
  );

  if (data) {
    console.log('Donezu Archive Create - Successful');
    res.status(201).send();
  }
});

router.get('/:email/:year/:month/:day', async (req, res) => {
  console.log('Donezu Archive Read - Pinged');
  let {email, year, month, day} = req.params;

  let user = await User.findOne({'email': email}, 'archives');

  if (!user) {
    console.log('Donezu Archive Read - Error');
    res.status(500).send();
  }
  
  if (user.archives[year] && user.archives[year][month] && user.archives[year][month][day]) {
    console.log('Donezu Archive Read - Successful');
    let data = user.archives[year][month][day];
    res.status(200).send(data);
  } else {
    console.log('Donezu Archive Read - Archive Not Found');
    res.status(404).send();
  }
});

module.exports = router;

// const archiveTask = async (email, year, month, day, task, cb) => {
//   let user = await User.findOne({'email': email}, 'archives');
//   if (user.archives[year] && user.archives[year][month] && user.archives[year][month][day]) {
//     console.log(`${year}.${month}.${day} exists`);
//     user.archives[year][month][day].push(task);
//   } else {
//     console.log('creating new date');
//     user.archives[year][month][day] = [task];
//   }
//   let data = await User.updateOne(
//     {'email': email},
//     {$set: user}
//   );
//   cb(null, data);
// }

// const readArchive = async (email, year, month, day, cb) => {
//   let user = await User.findOne({'email': email}, 'archives');
//   let data = user.archives[year][month][day];
//   data && data.length ? cb(null, data) : cb('archives not found', null);
// }