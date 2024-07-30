const express = require('express');
const Person = require('../Person/person');
const data = require('../Data/data.json');
const log = require('../Logs/logger');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  log(`Server is running on port ${port}`);
});

module.exports = app;