const express = require('express');

const bcrypt = require('bcrypt');

const router = express.Router();
const connexion = require('../data/mysql');

router.post('/signUp', async (req, res) => {
  try {
    const passexordHashed = await bcrypt.hash(req.body.password, 10);
    const { sex } = req.body;
    const { username } = req.body;
    const { email } = req.body;
    const password = passexordHashed;
    connexion.query('INSERT INTO user (sex, username, email, password) VALUES (?, ?, ?, ?)', [sex, username, email, password], (err, result) => {
      if (err) {
        res.sendStatus(400).send('Error to add user');
      } else {
        // res.setHeader('Content-Type', 'text/html');
        res.status(200).send(result);
      }
    });
  } catch {
    res.status(500).send('Error to hash password');
  }
});
module.exports = router;
