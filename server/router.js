const router = require('express').Router();
const controller = require('./controller.js');

/*-----------------------  /api/users/ -----------------------*/
router.route('/users/:username')
  .get(controller.getUser);

/*-----------------------  /api/messages/ -----------------------*/
router.route('/messages')
  .post(controller.handleSentMessage)

router.route('/messages/:username')
  .get(controller.getMessagesForUser)

router.route('/messages/:username/:id')
  .delete(controller.handleDeleteMessage);

/*-----------------------  /api/friendRequests/ -----------------------*/
router.route('/friendRequests/send')
  .post(controller.handleSentRequest);

router.route('/friendRequests/accept')
  .post(controller.handleAcceptedRequest);

/*-----------------------  /api/poke/ -----------------------*/
router.route('poke/:username')
  .get(controller.getPokemonForUser);

router.route('/poke/random/:username')
  .get(controller.getRandomPokemon);

module.exports = router;