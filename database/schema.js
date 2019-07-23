const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  friendsList: [ String ],
  friendRequests: [ String ],
  pokemonList: [
    {
      name: String,
      number: Number,
      types: [ String ],
      abilities: [ 
        {
          name: String,
          flavor_text: String
        }
      ],
      sprites: [ String ]
    }
  ]
});

// Note that giving each user an array of messages: sacrifices space complexity for improved time complexity
const messageSchema = mongoose.Schema({
  username: [
    {
      receiver: String,
      sender: String,
      content: String,
      timeStamp: Date,
      id: Number
    }
  ]
});

module.exports = {
  userSchema,
  messageSchema
};