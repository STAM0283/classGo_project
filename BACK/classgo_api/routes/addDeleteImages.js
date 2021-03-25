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
  // eslint-disable-next-line camelcase
  const data = req.body.image_id;
  connexion.query('DELETE FROM images WHERE image_id = ?', [data], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
