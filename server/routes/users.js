const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb');
const User = require('./auth/User').User;
const bcrypt = require('bcrypt');

const url = "mongodb+srv://server-admin:C.3mlel3t@c-emlelet-ksub3.mongodb.net/";


router.post('/register', function(req, res, next) {
  let newUser = new User(
      req.body.username,
      req.body.email,
      ""
  );
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    newUser.password = hash;
  })

  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) console.log(err);
    else {
      db.db('c-emlelet').collection('users')
          .insertOne(newUser)
          .then(result => res.json(JSON.stringify({success: true})))
          .catch(err => res.json(JSON.stringify({success: false})))
    }
  });
});


router.post('/login', function(req, res, next) {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
    if (err) console.log(err);
    else {
      db.db('c-emlelet').collection('users')
          .findOne({username: req.body.username}, {password: 1})
          .then(result => {
            if (result === null)
              res.json({err: 'Invalid username or password!'});
            else {
              bcrypt.compare(req.body.password, result.password)
                  .then(value => {
                    if (value === true)
                      res.json(JSON.stringify({id: result._id, username: result.username}))
                    else
                      res.json({err: 'Invalid username or password!'});
                  })
                  .catch(err => console.error(`Failed to compare items: ${err}`))
            }
          })
    }
  });
});

module.exports = router;
