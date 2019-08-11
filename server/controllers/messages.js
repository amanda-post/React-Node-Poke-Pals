const { Message } = require('../../database/index.js');
const mongoose = require('mongoose');

const messageControlller = {
  // Finds all messages sent or received by the requesting user.
  getMessagesForUser: (req, res) => {
    let { username } = req.params;
    Message
      .find({username: username}, 'messages').limit(15).sort({timeStamp: -1})
      .then((data) => {
        res.status(200).send(data);
        console.log(`Successfully got messages for user: ${username}.`);
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error getting messages for user: ${username}.`, err);
      });
  },

  // Adds message to both user's messages arrays in database.
  handleSentMessage: (req, res) => {
    let { sender, receiver, content } = req.body;
    Message
      .updateMany({$or: [{username: sender}, {username: receiver}]}, {$push: {messages: {sender, receiver, content, timeStamp: new Date()}}})
      .then((doc) => {
        res.status(201).send();
        console.log(`Successfully handled sent message from ${sender} to ${receiver}.`, doc);
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error handling sent message from ${sender} to ${receiver}.`, err);
      });
  },
  
  // Removes a message by id from ONE user's messages array
  handleDeleteMessage: (req, res) => {
    let { username, messageId } = req.params;
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
}

module.exports = messageControlller;