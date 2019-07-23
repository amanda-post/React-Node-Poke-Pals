const router = require('express').Router();
const controller = require('./controller.js');

/*-----------------------  /api/users/ -----------------------*/
router.route('/users/:user')
  .get(controller.getUser);

/*-----------------------  /api/messages/ -----------------------*/
router.route('/messages')
  .post(controller.handleSentMessage)

router.route('/messages/:user')
  .get(controller.getMessagesForUser)

router.route('/messages/:user/:id')
  .delete(controller.handleDeleteMessage);

/*-----------------------  /api/friendRequests/ -----------------------*/
router.route('/friendRequests/send')
  .post(controller.handleSentRequest);

router.route('/friendRequests/accept')
  .post(controller.handleAcceptedRequest);

/*-----------------------  /api/poke/ -----------------------*/
router.route('/poke/random')
  .get(controller.getRandomPokemon);

module.exports = router;