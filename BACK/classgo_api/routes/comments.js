const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.post('/commentUser', (req, res) => {
  const content = req.body;
  connexion.query('INSERT INTO comments SET ?', content, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});
router.get('/commentUser', (req, res) => {
  connexion.query('SELECT * FROM comments', (err, result) => {
    if (err) {
      res.sendStatus(400).send('Erreur dans la recupération des commentaires');
    } else {
      res.send(result);
    }
  });
});
module.exports = router;
