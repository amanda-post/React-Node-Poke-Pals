const mongoose = require('mongoose');
const { userSchema, friendSchema, messageSchema, pokemonSchema } = require('./schema.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/PokePal', { useMongoClient: true })
  .then( () => {
    console.log('Successfully connected to database') 
  })
  .catch( (err) => {
    console.log('Error connecting to database', err)
  });

const User = mongoose.model('User', userSchema);
const Friend = mongoose.model('Friend', friendSchema);
const Message = mongoose.model('Message', messageSchema);
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = {
  User,
  Friend,
  Message,
  Pokemon
};