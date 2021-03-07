const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.get('/category', (req, res) => {
  connexion.query('SELECT * FROM category', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        status: 200,
        result,
      });
    }
  });
});

module.exports = router;
