const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/database.js');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


// CRUD

// Create
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
        res.status(201).send(data)
      }
    }
  );
});

// Read
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

// Update


// Delete

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});