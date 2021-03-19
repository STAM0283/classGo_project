const express = require('express');

const router = express.Router();
const connexion = require('../data/mysql');

router.get('/users', (req, res) => {
  const { email } = req.query;
  connexion.query('SELECT username FROM user WHERE email = ?', email, (err, result) => {
    if (err) {
      res.sendStatus(400).sendStatus('Erreur dans la récupération de la liste des utilisateurs');
    } else {
      res.send({
        status: 200,
        message: 'succes',
        data: result,
      });
    }
  });
});
module.exports = router;
