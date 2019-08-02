const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes.js');
const archiveRoutes = require('./routes/archiveRoutes.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/db', todoRoutes);
app.use('/archives', archiveRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});