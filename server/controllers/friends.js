const { Friend } = require('../../database/index.js');
const mongoose = require('mongoose');

const friendControlller = {
  // Gets friends list and any pending friend requests for a user
  getFriendsForUser: (req, res) => {
    let { username } = req.params;
    Friend
      .findOne({username: username})
      .then((data) => {
        res.status(200).send(data);
        console.log(`Successfully got friends for user: ${username}.`);
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error getting friends for user: ${username}.`, err);
      });
  },

  // Puts friend request in receiver's pending requests in database.
  handleSentFriendRequest: (req, res) => {
    let { sender, receiver } = req.body;
    Friend
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
      Friend
        .update({username: sender}, {$push: {friendsList: receiver}})
        .then(() => {
          Friend.update({username: receiver}, {$push: {friendsList: sender}})
            .then((doc) => {
              res.status(201).send();
              console.log(`Successfully handled accepted request from ${sender} to ${receiver}`, doc);
            })
        })
        .catch((err) => {
          res.status(404).send(err);
          console.log('Error handling accepted friend request for users:', sender, receiver, err);
        })
        
    }
    Friend
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
    let { user1, user2 } = req.body;
    Friend
      .update({username: user1}, {$pull: {friendsList: user2}})
      .then(() => {
        Friend.update({username: user2}, {$pull: {friendsList: user1}})
          .then((doc) => {
            res.status(201).send();
            console.log(`Successfully deleted friendships for ${user1} and ${user2}`, doc);
          })
      })
      .catch((err) => {
        res.status(404).send(err);
        console.log(`Error deleting friendships for ${user1} and ${user2}`, err);
      });
  },
}

module.exports = friendControlller;