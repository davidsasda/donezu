const router = require('express').Router();
const db = require('../../database/database.js');

router.post('/:userID', (req, res) => {
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

router.get('/:userID', (req, res) => {
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

router.put('/:userID', (req, res) => {
  console.log('Donezu Update - Pinged');
});

router.delete('/:userID/:index', (req, res) => {
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

module.exports = router;