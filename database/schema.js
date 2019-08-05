const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  uid: String,
  username: String,
  friendsList: [ String ],
  friendRequests: [ String ]
});

const pokemonSchema = mongoose.Schema({
  username: String,
  pokemon: [
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
})

// Note that giving each user an array of messages: sacrifices space complexity for improved time complexity
const messageSchema = mongoose.Schema({
  username: String,
  messages: [
    {
      receiver: String,
      sender: String,
      content: String,
      timeStamp: Date,
    }
  ]
});

module.exports = {
  userSchema,
  messageSchema,
  pokemonSchema
};