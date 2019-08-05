const mongoose = require('mongoose');
const { Message, User, Pokemon } = require('../index.js')
const { exampleUserData, exampleMessageData, examplePokeData } = require('./sampleData.js');

const seeder = () => {
  Message
    .create(exampleMessageData)
    .then(() => { 
      console.log('Successfully seeded messageData')
      User
        .create(exampleUserData)
        .then(() => {
          console.log('Successfully seeded userData')
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
