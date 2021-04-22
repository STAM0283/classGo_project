const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.get('/category', (_, res) => {
  try {
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
  } catch (e) {
    console.log('Erreur : ', e);
    res.send(e.toString());
  }
});

module.exports = router;
