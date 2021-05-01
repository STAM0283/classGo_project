const express = require('express');

const router = express.Router();
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const connexion = require('../data/mysql');

router.post('/addAdmin', async (req, res) => {
  try {
    const pass = await bcrypt.hash(req.body.password, 10);
    const { name } = req.body;
    const { email } = req.body;
    const password = pass;
    connexion.query('INSERT INTO admin (name, email, password) VALUES (?, ?, ?)', [name, email, password], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  } catch {
    res.status(500).send('Error to hash password');
  }
});
router.post('/adminConnexion', async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;
  connexion.query('SELECT * FROM admin WHERE email = ?', email, async (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      await bcrypt.compare(password, result[0].password, (error, response) => {
        if (response) {
          req.session.admin = result;
          console.log(result);
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
        message: 'Admin doesn\'t exist',
      });
    }
  });
});

module.exports = router;
