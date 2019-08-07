const { User, Message, Pokemon } = require('../database/index.js');
const mongoose = require('mongoose');

const controlller = {
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
  
  // Finds all messages sent or received by the requesting user.
  getMessagesForUser: (req, res) => {
    let { username } = req.params;
    Message
      .find({username: username}, 'messages').limit(15).sort({timeStamp: -1})
      .then((data) => {
        console.log(`Successfully got messages for username: ${username}`);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('Error getting messages for username:', username, err);
        res.status(404).send(`Error getting messages for username: ${username}`);
      });
  },

  getPokemonForUser: (req, res) => {
    let { username } = req.params;
    Pokemon
      .find({username: username})
      .then((data) => {
        console.log(`Successfully got pokemon for username: ${username}`);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log('Error getting pokemon for username:', username, err);
        res.status(404).send(`Error getting pokemon for username: ${username}`);
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
    Message
      .update([{username: sender}, {$push: {messages: {sender, receiver, content, timeStamp: new Date()}}},
        {username: receiver}, {$push: {messages: {sender, receiver, content, timeStamp: new Date()}}}])
      .then((doc) => {
        res.status(201).send();
        console.log(`Successfully handled sent message from ${sender} to ${receiver}.`, doc);
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error handling sent message from ${sender} to ${receiver}.`, err);
      });
  },
  
  // Removes a message by id from a user's messages
  handleDeleteMessage: (req, res) => {
    let { username, messageId } = req.params;
    console.log('req.body-----------------------------', req.body)
    Message
      .update({username: username}, {$pull: {messages: {_id: messageId}}})
      .then((doc) => {
        res.status(204).send();
        console.log(`${username}'s message id: ${messageId} deleted.`, doc);
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Couldn't delete ${username}'s message id: ${messageId}.`, err);
      });
  },

  // Puts friend request in receiver's pending requests in database.
  handleSentFriendRequest: (req, res) => {
    let { sender, receiver } = req.body;
    User
      .update({username: receiver}, {$push: {friendRequests: sender}})
      .then((doc) => {
        res.status(202).send();
        console.log(`Friend request sent from ${sender} to ${receiver}.`, doc)
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error sending friend request from ${sender} to ${receiver}.`, err);
      });
  },

  // If accepted, adds sender to receiver's friends list in database, and vice versa.
  // If declined, removes the pending request from the receiver's list
  handleResponseToFriendRequest: (req, res) => {
    let { sender, receiver, response } = req.body;
    if (response === "accept") {
      User
        .update({username: sender}, {$push: {friendsList: receiver}})
        .then(User.update({username: receiver}, {$push: {friendsList: sender}}))
        .then((doc) => {
          res.status(201).send();
          console.log(`Successfully handled accepted request from ${sender} to ${receiver}`, doc);
        })
        .catch((err) => {
          res.status(404).send(err);
          console.log('Error handling accepted friend request for users:', sender, receiver, err);
        });
    } 
    User
      .update({username: receiver}, {$pull: {friendRequests: sender}})
      .then((doc) => {
        res.status(204).send();
        console.log(`Successfully removed friend request from ${sender} to ${receiver}.`, doc);
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error with friend request from ${sender} to ${receiver}.`, err);
      });
  },

  handleDeleteFriend: (req, res) => {

  },
}

module.exports = controlller;