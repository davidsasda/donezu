const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/donezu', {useNewUrlParser: true});

const db = mongoose.connection;

const dateFns = require('date-fns');

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const userSchema = new mongoose.Schema(
  {
    userID: String,
    password: String,
    tasks: Array,
    archives: Object
  }
);

const User = mongoose.model('user', userSchema);

const createTask = async (userID, task, cb) => {
  let user = await User.findOne({'userID': userID}, 'tasks');
  user.tasks.push(task);
  let data = await User.updateOne(
    {'userID': userID},
    {$set: user}
  );
  cb(null, data);
};

const readTask = async (userID, cb) => {
  let data = await User.find({'userID': userID}, 'tasks');
  data.length ? cb(null, data[0]) : cb('error', null);
}

const deleteTask = async (userID, index, cb) => {
  let user = await User.findOne({'userID': userID}, 'tasks');
  user.tasks.splice(index, 1);
  let data = await User.updateOne(
    {'userID': userID},
    {$set: user}
  );
  cb(null, data);
}

const archiveTask = async (userID, year, month, day, task, cb) => {
  let user = await User.findOne({'userID': userID}, 'archives');
  if (user.archives[year] && user.archives[year][month] && user.archives[year][month][day]) {
    console.log(`${year}.${month}.${day} exists`);
    user.archives[year][month][day].push(task);
  } else {
    console.log('creating new date');
    user.archives[year][month][day] = [task];
  }
  let data = await User.updateOne(
    {'userID': userID},
    {$set: user}
  );
  cb(null, data);
}

const readArchive = async (userID, year, month, day, cb) => {
  let user = await User.findOne({'userID': userID}, 'archives');
  let data = user.archives[year][month][day];
  data && data.length ? cb(null, data) : cb('archives not found', null);
}

const readWeek = async (userID, startOfWeek, cb) => {
  let data = []
  let user = await User.findOne({'userID': userID}, 'archives');
  let week = [
    dateFns.format(dateFns.addDays(startOfWeek, 6), 'YYYY-MM-DD').split('-'),
    dateFns.format(dateFns.addDays(startOfWeek, 5), 'YYYY-MM-DD').split('-'),
    dateFns.format(dateFns.addDays(startOfWeek, 4), 'YYYY-MM-DD').split('-'),
    dateFns.format(dateFns.addDays(startOfWeek, 3), 'YYYY-MM-DD').split('-'),
    dateFns.format(dateFns.addDays(startOfWeek, 2), 'YYYY-MM-DD').split('-'),
    dateFns.format(dateFns.addDays(startOfWeek, 1), 'YYYY-MM-DD').split('-'),
    dateFns.format(startOfWeek, 'YYYY-MM-DD').split('-')
  ]
  for (let day of week) {
    let query = null;
    if (user.archives[day[0]] && user.archives[day[0]][day[1]] && user.archives[day[0]][day[1]][day[2]]) {
      query = user.archives[day[0]][day[1]][day[2]];
    }
    query ? data.push(query.length) : data.push(0);
  }
  cb(null, data);
}

module.exports.createTask = createTask;
module.exports.readTask = readTask;
// module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;

module.exports.archiveTask = archiveTask;
module.exports.readArchive = readArchive;

module.exports.readWeek = readWeek;