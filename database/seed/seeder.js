const mongoose = require('mongoose');
const { Message, User } = require('../index.js')
const exampleUser = require('./sampleData.js');
const exampleMessages = require('./sampleData.js');

const seeder = () => {
  Message
    .insertMany(exampleMessages)
    .then(() => { 
      User
        .create(exampleUser)
        .then(() => {
          console.log('Successfully seeded data')
          mongoose.connection.close();
        })
    })
    .catch( err => console.error(err));
}

seeder();
