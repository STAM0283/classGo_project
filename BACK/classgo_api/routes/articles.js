const { json } = require('body-parser');
const express = require('express');
const connexion = require('../data/mysql');

const router = express.Router();

router.get('/articles', (req, res) => {
  connexion.query('SELECT * FROM article', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(json(result));
    }
  });
});
router.post('/articles', (req, res) => {
  const dataArticle = req.body;

  connexion.query('INSERT INTO article SET ?', dataArticle, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        message: 'L\'artcile a été ajouté avec succée',
        result,
      });
    }
  });
});

module.exports = router;
