const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();
const connexion = require('../data/mysql');

router.post('/signIn', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  connexion.query('SELECT * FROM user WHERE (email) = ?', email, async (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      await bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          res.send({
            status: 200,
            message: 'success',
            data: response,
          });
        } else {
          res.send({
            error,
            message: 'Wrong username/password combination!',
          });
        }
      });
    } else {
      res.send({
        message: 'User doesn\'t exist',
      });
    }
  });
});

module.exports = router;
