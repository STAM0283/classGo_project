const express = require('express');
const connexion = require('../data/mysql');

const router = express.Router();

router.get('/articles', (req, res) => {
  const { category } = req.query;
  const query = category !== undefined ? `SELECT * from article WHERE category_id = '${category}'` : 'SELECT * from article';
  connexion.query(query, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
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
