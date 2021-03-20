const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.get('/shoopingCart', (req, res) => {
  connexion.query('SELECT * FROM shoppingbasket', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.post('/shoopingCart', (req, res) => {
  const { name } = req.body;
  const { picture } = req.body;
  const { price } = req.body;
  connexion.query('INSERT INTO shoppingbasket (name, picture, price) VALUES (?, ?, ?)', [name, picture, price], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        result,
      });
    }
  });
});
module.exports = router;
