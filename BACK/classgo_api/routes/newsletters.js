const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.post('/newsletters', (req, res) => {
  const dataForm = req.body;

  connexion.query('INSERT INTO newsletters SET ?', dataForm, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Erreur lors de la sauvegarde de l\'émail du client');
    } else {
      res.send(results);
    }
  });
});
module.exports = router;
