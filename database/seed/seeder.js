const mongoose = require('mongoose');
const { Message, Friend, Pokemon } = require('../index.js')
const { exampleFriendData, exampleMessageData, examplePokeData } = require('./sampleData.js');

const seeder = () => {
  Message
    .create(exampleMessageData)
    .then(() => { 
      console.log('Successfully seeded messageData')
      Friend
        .create(exampleFriendData)
        .then(() => {
          console.log('Successfully seeded friendData')
        })
    })
    .then(() => {
      Pokemon
        .create(examplePokeData)
        .then(() => {
          console.log('Successfully seeded pokeData')
          mongoose.connection.close();
        })
    })
    .catch( err => console.error(err));
}

seeder();
