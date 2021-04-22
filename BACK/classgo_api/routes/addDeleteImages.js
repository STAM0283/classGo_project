/* eslint-disable camelcase */
const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.post('/slideShow', (req, res) => {
  const { title } = req.body;
  const { url } = req.body;
  connexion.query('INSERT INTO images (title, url) VALUES (?, ?)', [title, url], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.delete('/slideShow', (req, res) => {
  const id = req.query.image_id;
  try {
    connexion.query('DELETE FROM images WHERE image_id = ?', id, (err, result) => {
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
