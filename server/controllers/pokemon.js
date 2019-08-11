const { Pokemon } = require('../../database/index.js');
const mongoose = require('mongoose');
const axios = require('axios');

const pokeController = {
  // retrieves the list of pokemon a user has collected
  getPokemonForUser: (req, res) => {
    let { username } = req.params;
    Pokemon
      .find({username: username})
      .then((data) => {
        res.status(200).send(data);
        console.log(`Successfully got pokemon for username: ${username}`);
      })
      .catch((err) => {
        res.status(404).send();
        console.log('Error getting pokemon for username:', username, err);
      });
  },
  
  // Returns object with info for a randomly generated pokemon from the PokeAPI.
  getRandomPokemon: (req, res) => {
    // call to pokemon API
    // poke/api/pokemon/number/:number
  
    // add pokemon to user's collection in database
  },

  addPokemonToList: (req, res) => {
    axios
      .get(`https://pokeapi.co/api/v2/${1}`)
  }
};

module.exports = pokeController;