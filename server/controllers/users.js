const User = require('../../database/index.js');
const mongoose = require('mongoose');

const userControlller = {
  // Checks if username exists; if not, creates a new database entry for that username.
  handleNewUser: (req, res) => {
    let { username } = req.body;
    User
      .find({username: username})
      .then(() => {
        console.log('That username has been found / already exists.');
        res.status(200).send(false);
      })
      .catch((err) => {
        // CREATE NEW DOCUMENT WITH USERNAME
        console.log('This error message should say that the document was NOT found', err);
        res.status(200).send(true);
      });
  },
  
  // Finds all data for user's profile (friends list, pokemon list, etc.)
  getUser: (req, res) => {
    let { uid } = req.params;
    User
      .findOne({uid: uid})
      .then((data) => {
        console.log(`Successfully got data for user: ${uid}`);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('Error with getUser:', err);
        res.status(404).send(`Error loading profile for user: ${uid}`);
      });
  },
 
}

module.exports = userControlller;