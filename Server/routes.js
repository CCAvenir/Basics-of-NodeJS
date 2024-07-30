const express = require('express');
const router = express.Router();
const Person = require('../Person/person');
const data = require('../Data/data.json');

router.get('/persons', (req, res) => {
  const persons = data.map(item => new Person(item.name, item.age));
  res.json(persons);
});

module.exports = router;