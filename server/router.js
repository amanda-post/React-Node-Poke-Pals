const router = require('express').Router();
const controller = require('./controller.js');

/*------------------------  /api/users/ -------------------------*/
router.route('/users/:uid')
  .get(controller.getUser);

/*-----------------------  /api/messages/ -----------------------*/
router.route('/messages')
  .post(controller.handleSentMessage)

router.route('/messages/:username')
  .get(controller.getMessagesForUser)
  
router.route('/messages/:username/:messageId')
  .delete(controller.handleDeleteMessage);
  
/*-----------------------  /api/friends/ ------------------------*/
router.route('/friends')
  .post(controller.handleSentFriendRequest)
  .put(controller.handleResponseToFriendRequest)
  .delete(controller.handleDeleteFriend);

/*-------------------------  /api/poke/ -------------------------*/
router.route('poke/:username')
  .get(controller.getPokemonForUser);

router.route('/poke/random/:username')
  .get(controller.getRandomPokemon);

module.exports = router;