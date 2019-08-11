const { User } = require('../../database/index.js');
const mongoose = require('mongoose');
const hash = require('../../hash.js');

const userControlller = {
  // Checks if username exists; if not, creates a new database entry for that username.
  signUpUser: (req, res) => {
    let { username, password } = req.body;
    User
      .find({username: username})
      .then((doc) => {
        if (doc == false) {
          User
            .create({
              username: username,
              password: hash(password)
            })
            .then((doc) => {
              console.log('Successfully created new user:', username)
              res.status(200).send(username);
            })
            .catch((err) => {
              console.log('Error creating new user', err);
              res.status(404).send(err);
            })
        } else {
          console.log(`The username '${username}' is already taken.`);
          res.status(404).send(false);
        }
      })
      .catch(err => console.log(err));
  },
 
}

module.exports = userControlller;