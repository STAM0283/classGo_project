/* eslint-disable camelcase */
const express = require('express');
const connexion = require('../data/mysql');

const router = express.Router();

router.get('/articles', (req, res) => {
  const { category_id } = req.body;
  const query = category_id !== undefined ? `SELECT * from article WHERE category_id = '${category_id}'` : 'SELECT * from article';
  try {
    connexion.query(query, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  } catch (e) {
    console.log('Erreur : ', e);
    res.send(e.toString());
  }
});
router.post('/articles', (req, res) => {
  const dataArticle = req.body;
  try {
    connexion.query('INSERT INTO article SET ?', dataArticle, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send({
          message: 'the artcile has been successfully added',
          result,
        });
      }
    });
  } catch (error) {
    res.send(error.toString());
  }
});
router.delete('/articles', (req, res) => {
  const id = req.query.article_id;
  connexion.query('DELETE FROM article WHERE article_id = ?', id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.put('/articles', (req, res) => {
  const { article_id } = req.body;
  const { name } = req.body;
  const { description } = req.body;
  const { picture } = req.body;
  const { category_id } = req.body;
  const { price } = req.body;
  try {
    connexion.query('UPDATE article SET name = ? description = ?, picture = ?, category_id = ?, price = ? WHERE article_id = ?',
      [name, description, picture, category_id, price, article_id], (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      });
  } catch (error) {
    res.send(error.toString());
  }
});
module.exports = router;
