require('dotenv').config();
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb');
const bcrypt = require('bcrypt');

const url =
  process.env.DB_URL ||
  'mongodb+srv://server-admin:C.3mlel3t@c-emlelet-ksub3.mongodb.net/';

router.post('/register', function(req, res) {
  const { username, email } = req.body;
  const newUser = { username, email };
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    newUser.password = hash;
  });

  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) console.log(err);
    else {
      db.db('c-emlelet')
        .collection('users')
        .insertOne(newUser)
        .then(() => res.json(JSON.stringify({ success: true })))
        .catch((err) =>
          res.json(JSON.stringify({ success: false, error: err }))
        );
    }
  });
});

router.post('/login', function(req, res) {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) console.log(err);
    else {
      db.db('c-emlelet')
        .collection('users')
        .findOne({ username: req.body.username }, { password: 1 })
        .then((result) => {
          if (result === null)
            res.json({ err: 'Invalid username or password!' });
          else {
            bcrypt
              .compare(req.body.password, result.password)
              .then((value) => {
                if (value === true)
                  res.json(
                    JSON.stringify({
                      id: result._id,
                      username: result.username
                    })
                  );
                else res.json({ err: 'Invalid username or password!' });
              })
              .catch((err) => console.error(`Failed to compare items: ${err}`));
          }
        });
    }
  });
});

module.exports = router;
