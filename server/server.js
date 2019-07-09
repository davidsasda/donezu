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
  db.createTask(
    req.params.userID,
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
})

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
        res.status(200).send(data.tasks);
      }
    }
  );
});

app.put('/db/:userID', (req, res) => {
  console.log('Donezu Update - Pinged');
});

app.delete('/db/:userID/:index', (req, res) => {
  console.log('Donezu Delete - Pinged');
  db.deleteTask(
    req.params.userID,
    req.params.index,
    (err, data) => {
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
app.post('/archives/:userID/:year/:month/:day', (req, res) => {
  console.log('Donezu Archive Create - Pinged');
  db.archiveTask(
    req.params.userID,
    req.params.year,
    req.params.month,
    req.params.day,
    req.body,
    (err, data) => {
      if (err) {
        console.log('Donezu Archive Create - Error');
        res.status(500).send(err);
      } else {
        console.log('Donezu Archive Create - Successful');
        res.status(201).send();
      }
    }
  )
});

app.get('/archives/:userID/:year/:month/:day', (req, res) => {
  console.log('Donezu Archive Read - Pinged');
  db.readArchive(
    req.params.userID,
    req.params.year,
    req.params.month,
    req.params.day,
    (err, data) => {
      if (err) {
        console.log('Donezu Archive Read - Error');
        res.status(500).send(err);
      } else {
        console.log('Donezu Archive Read - Successful');
        res.status(200).send(data);
      }
    }
  );
});

app.put('/archives/:userID/', (req, res) => {
  console.log('Donezu Archive Update - Pinged');
});

app.delete('/archives/:userID/', (req, res) => {
  console.log('Donezu Archive Delete - Pinged');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});