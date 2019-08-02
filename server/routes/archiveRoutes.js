const router = require('express').Router();
const db = require('../../database/database.js');

router.post('/:userID/:year/:month/:day', (req, res) => {
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

router.get('/:userID/:year/:month/:day', (req, res) => {
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

router.get('/weeks/:userID/:year/:month/:day', (req, res) => {
  console.log('Donezu Week Read - Pinged');
  db.readWeek(
    req.params.userID,
    `${req.params.year}-${req.params.month}-${req.params.day}`,
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

router.put('/:userID/', (req, res) => {
  console.log('Donezu Archive Update - Pinged');
});

router.delete('/:userID/', (req, res) => {
  console.log('Donezu Archive Delete - Pinged');
});

module.exports = router;