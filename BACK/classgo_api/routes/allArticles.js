const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.get('/allArticles', (_, res) => {
  connexion.query('SELECT * FROM article', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
