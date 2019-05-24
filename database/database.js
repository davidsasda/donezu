const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/donezu', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const taskSchema = new mongoose.Schema(
  {
    userID: String,
    task: String,
    due: String
  }
);

const Donezu = mongoose.model('donezu', taskSchema);

const createTask = (task, cb) => {
  console.log('mongoose createTask');
  let newTask = new Donezu({
    userID: task.userID,
    task: task.task,
    due: task.due
  });
  newTask.save();
  cb(null, newTask);
}

const readTask = async (userID, cb) => {
  console.log('mongoose readTask');
  const data = await Donezu.find({'userID' : userID});
  data.length ? cb(null, data) : cb('error', null);
}

module.exports.createTask = createTask;
module.exports.readTask = readTask;