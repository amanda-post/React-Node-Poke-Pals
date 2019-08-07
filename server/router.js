const router = require('express').Router();
const userControls = require('./controllers/users.js');
const friendControls = require('./controllers/friends.js');
const messageControls = require('./controllers/messages.js');
const pokeControls = require('./controllers/pokemon.js')

/*------------------------  /api/users/ -------------------------*/
router.route('/users/:uid')
  .get(userControls.getUser);



/*-----------------------  /api/messages/ -----------------------*/
router.route('/messages')
  .post(messageControls.handleSentMessage)

router.route('/messages/:username')
  .get(messageControls.getMessagesForUser)
  
router.route('/messages/:username/:messageId')
  .delete(messageControls.handleDeleteMessage);
  


/*-----------------------  /api/friends/ ------------------------*/
router.route('/friends')
  .post(friendControls.handleSentFriendRequest)
  .put(friendControls.handleResponseToFriendRequest)
  .delete(friendControls.handleDeleteFriend);



/*-------------------------  /api/poke/ -------------------------*/
router.route('/poke/:username')
  .get(pokeControls.getPokemonForUser);

router.route('/poke/random/:username')
  .get(pokeControls.getRandomPokemon);


  
module.exports = router;