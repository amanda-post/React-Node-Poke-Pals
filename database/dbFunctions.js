// Database functions that will interact with the database upon client requests to server
const { User, Message } = require('./index.js');

// Returns a random 12-digit number id
const randomIdGenerator = () => {
  let id = 1;
  for (let i = 0; i < 12; i++) {
    id += Math.floor(Math.random() * 10)
  };
  return id;
}

const handlers = {
  handleSentRequest: (sender, receiver) => {
    User
  },

  handleAcceptedRequest: (sender, receiver) => {
    User
  },

  handleSentMessage: (sender, receiver, content) => {
    Message
  },

  handleDeleteMessage: (messageId) => {
    Message
  },

}

module.exports = handlers;