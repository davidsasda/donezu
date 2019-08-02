const router = require('express').Router();
const User = require('../Model/User.js');
const dateFns = require('date-fns');

router.get('/:email/:year/:month/:day', async (req, res) => {
  console.log('Donezu Week Read - Pinged');
  let {email, year, month, day} = req.params
  let startOfWeek = `${year}-${month}-${day}`;
  let data = [];
  let user = await User.findOne({'email': email}, 'archives');

  if (!user) {
    console.log('Donezu Week Read - Error');
    res.status(500).send();
  }

  let week = [
    dateFns.format(dateFns.addDays(startOfWeek, 6), 'YYYY-MM-DD').split('-'), // Sunday
    dateFns.format(dateFns.addDays(startOfWeek, 5), 'YYYY-MM-DD').split('-'), // Saturday
    dateFns.format(dateFns.addDays(startOfWeek, 4), 'YYYY-MM-DD').split('-'), // Friday
    dateFns.format(dateFns.addDays(startOfWeek, 3), 'YYYY-MM-DD').split('-'), // Thursday
    dateFns.format(dateFns.addDays(startOfWeek, 2), 'YYYY-MM-DD').split('-'), // Wednesday
    dateFns.format(dateFns.addDays(startOfWeek, 1), 'YYYY-MM-DD').split('-'), // Tuesday
    dateFns.format(startOfWeek, 'YYYY-MM-DD').split('-') // Monday
  ]

  // reads each day of the week from db
  for (let day of week) {
    let query = null;
    if (user.archives[day[0]] && user.archives[day[0]][day[1]] && user.archives[day[0]][day[1]][day[2]]) {
      query = user.archives[day[0]][day[1]][day[2]];
    }
    query ? data.push(query.length) : data.push(0);
  }

  console.log('Donezu Week Read - Successful');
  res.status(200).send(data);
});

module.exports = router;