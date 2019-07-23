const { User, Message } = require('../database/schema.js');
const mongoose = require('mongoose');
const database = require('../database/dbFunctions.js');

const controller = {
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
    let username = req.params; // check this
    User
      .find({username: username})
      .then((data) => {
        console.log(`Successfully got data for user: ${username}`);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('Error with getUser:', err);
        res.status(404).send(`Error loading profile for user: ${username}`);
      });
  },

  // Finds all messages sent or received by the requesting user.
  getMessagesForUser: (req, res) => {
    let username = req.params;
    Message
      .find({username: username})
      .then((data) => {
        console.log(`Successfully got messages for username: ${username}`);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('Error getting messages for username:', username, err);
        res.status(404).send(`Error getting messages for username: ${username}`);
      });
  },

  // Returns object with info for a randomly generated pokemon from the PokeAPI.
  getRandomPokemon: (req, res) => {
    // call to pokemon API
    // poke/api/pokemon/number/:number

    // add pokemon to user's collection in database
  },

  // Adds message to both user's collection in database.
  handleSentMessage: (req, res) => {
    let { sender, receiver, content } = req.body;
    database
      .handleSentMessage(sender, receiver, content)
      .then((docs) => {
        console.log(`Successfully handled sent message from ${sender} to ${receiver}`);
        res.status(202).send(`Successfully sent message to ${receiver}!`);
      })
      .catch((err) => {
        console.log(`Error handling sent message from ${sender} to ${receiver}`, err);
        res.status(404).send(`Error sending message to ${receiver}!`);
      });
  },
  
  // Removes a message by id from a user's messages
  handleDeleteMessage: (req, res) => {
    let { user, messageId } = req.params;
  },

  // Puts friend request in receiver's pending requests in database.
  handleSentRequest: (req, res) => {
    let { sender, receiver } = req.body;
    database
      .handleSentRequest(sender, receiver)
      .then((docs) => {
        console.log('Successfully handled sent request for users:', sender, receiver);
        res.status(202).send(`Successfully sent friend request to ${receiver}!`);
      })
      .catch((err) => {
        console.log('Error handling sent friend request for users:', sender, receiver, err);
        res.status(404).send(`Error sending friend request to ${receiver}!`);
      });
  },

  // Adds sender to receiver's friends list in database, and vice versa.
  handleAcceptedRequest: (req, res) => {
    let { sender, receiver } = req.body;
    database
      .handleAcceptedRequest(sender, receiver)
      .then((docs) => {
        console.log('Successfully handled accepted request for users:', sender, receiver);
        res.status(202).send(`Successfully accepted friend request from ${sender}!`);
      })
      .catch((err) => {
        console.log('Error handling accepted friend request for users:', sender, receiver, err);
        res.status(404).send(`Error sending accepting friend request from ${sender}!`);
      });
  }
}

module.exports = controller;