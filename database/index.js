const mongoose = require('mongoose');
const { userSchema, messageSchema } = require('./schema.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/Pokemon', { useMongoClient: true })
  .then( () => {
    console.log('Successfully connected to database') 
  })
  .catch( (err) => {
    console.log('Error connecting to database', err)
  });

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = {
  User,
  Message
};