const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/database.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Todo List Routes
app.post('/db/:userID', (req, res) => {
  console.log('Donezu Create - Pinged');
  console.log(`userID - ${req.params.userID}`);
  db.createTask(
    req.body,
    (err, data) => {
      if (err) {
        console.log('Donezu Create - Error');
        res.status(500).send(err);
      } else {
        console.log('Donezu Create - Successful');
        res.status(201);
      }
    }
  );
});

app.get('/db/:userID', (req, res) => {
  console.log('Donezu Read - Pinged');
  db.readTask(
    req.params.userID,
    (err, data) => {
      if (err) {
        console.log('Donezu Read - Error');
        res.status(500).send(err);
      } else {
        console.log('Donezu Read - Successful');
        res.status(200).send(data);
      }
    }
  );
});

app.put('/db/:userID', (req, res) => {
  console.log('Donezu Update - Pinged');
});

app.delete('/db/:userID/:taskID', (req, res) => {
  console.log('Donezu Delete - Pinged');
  db.deleteTask(
    req.params.taskID,
    (err) => {
      if (err) {
        console.log('Donezu Delete - Error');
        res.status(500).send(err);
      } else {
        console.log('Donezu Delete - Successful');
        res.status(200).send();
      }
   }
  );
});


// Archive routes
app.post('/archive/:userID', (req, res) => {
  console.log('Donezu Archive Create - Pinged');
});

app.get('archive/:userID/:date', (req, res) => {
  console.log('Donezu Archive Read - Pinged');
});

app.put('archive/:userID/', (req, res) => {
  console.log('Donezu Archive Update - Pinged');
});

app.delete('archive/:userID/', (req, res) => {
  console.log('Donezu Archive Delete - Pinged');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});