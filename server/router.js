const router = require('express').Router();
const userControls = require('./controllers/users.js');
const friendControls = require('./controllers/friends.js');
const messageControls = require('./controllers/messages.js');
const pokeControls = require('./controllers/pokemon.js');
const passport = require('./passport.js');

/*------------------------  /api/users/ -------------------------*/
router.route('/users/signin')
  .post(passport.authenticate('local', {session: false}), (req, res)  => {
    res.status(200).send(req.body.username)
  });

router.route('/users/signup')
  .post(userControls.signUpUser);

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

router.route('/friends/:username')
  .get(friendControls.getFriendsForUser);


/*-------------------------  /api/poke/ -------------------------*/
router.route('/poke/:username')
  .get(pokeControls.getPokemonForUser);

router.route('/poke/random/:username')
  .get(pokeControls.getRandomPokemon);


  
module.exports = router;