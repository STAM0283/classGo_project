const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.post('/newsletters', (req, res) => {
  const email = req.query;

  connexion.query('REPLACE INTO newsletters SET ?', email, (err, results) => {
    if (err) {
      console.log(err);
      res.status(400).send('Erreur lors de la sauvegarde de l\'émail du client');
    } else {
      res.send(results);
    }
  });
});
module.exports = router;
