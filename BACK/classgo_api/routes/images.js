const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.get('/images', (_, res) => {
  connexion.query('SELECT * FROM images', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
