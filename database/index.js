const mongoose = require('mongoose');
const { userSchema, messageSchema, pokemonSchema } = require('./schema.js');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/PokePal', { useMongoClient: true })
  .then( () => {
    console.log('Successfully connected to database') 
  })
  .catch( (err) => {
    console.log('Error connecting to database', err)
  });

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = {
  User,
  Message,
  Pokemon
};