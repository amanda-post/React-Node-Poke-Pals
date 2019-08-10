const moment = require('moment');
// Returns either a) the value for a random index in an array, or
// b) a random integer only (by not passing in an array)
const randomizer = (array, maximum) => {
  let max = maximum || array.length - 1;
  let randomNum = Math.floor(Math.random() * ( max + 1 ));
  if (array) {
    return array[randomNum];
  } else {
    return randomNum;
  };
};

// Randomly generates a 12-digit id number as a string
const randomIdGenerator = () => {
  let id = '';
  for (let i = 0; i < 12; i++) {
    id += Math.floor(Math.random() * 10)
  };
  return id;
}

let exampleUserData = [
  {
    uid: randomIdGenerator(),
    username: 'amanda_toast',
    friendsList: [ 'mslocum', 'ktaing', 'impromptuu', 'egrubbs', 'jjklee' ],
    friendRequests: [ 'bananawayne' ]
  },
  {
    uid: randomIdGenerator(),
    username: 'mslocum',
    friendsList: [ 'amanda_toast', 'ktaing' ],
    friendRequests: [ 'bananawayne' ]
  },
  {
    uid: randomIdGenerator(),
    username: 'ktaing',
    friendsList: [ 'mslocum', 'amanda_toast', 'egrubbs' ],
    friendRequests: [ 'bananawayne' ]
  },
  {
    uid: randomIdGenerator(),
    username: 'impromptuu',
    friendsList: [ 'amanda_toast', 'egrubbs' ],
    friendRequests: [ 'bananawayne' ]
  },
  {
    uid: randomIdGenerator(),
    username: 'egrubbs',
    friendsList: [ 'amanda_toast', 'ktaing', 'impromptuu' ],
    friendRequests: [ 'bananawayne' ]
  },
  {
    uid: randomIdGenerator(),
    username: 'bananawayne',
    friendsList: [ 'jjklee' ],
    friendRequests: [  ]
  },
  {
    uid: randomIdGenerator(),
    username: 'jjklee',
    friendsList: [ 'amanda_toast', 'bananawayne' ],
    friendRequests: [ 'bananawayne' ]
  }
]

let examplePokeData = [
  {
    username: 'amanda_toast',
    pokemon: [
      {
        name: 'Bulbasaur',
        number: '001',
        types: [ 'grass', 'poison' ],
        abilities: [ 
          {
            name: 'overgrow',
            flavor_text: 'Ups Grass moves in a pinch.'
            },
          {
            name: 'chlorophyll',
            flavor_text: 'Raises Speed in sunshine.'
          }
        ],
        sprites: { front_default: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/192px-001Bulbasaur.png' }
      },
      {
        name: 'Ivysaur',
        number: '002',
        types: [ 'grass', 'poison' ],
        abilities: [ 
          {
            name: 'overgrow',
            flavor_text: 'Ups Grass moves in a pinch.'
            },
          {
            name: 'chlorophyll',
            flavor_text: 'Raises Speed in sunshine.'
          }
        ],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' }
      },
      {
        name: 'Ivysaur',
        number: '002',
        types: [ 'grass', 'poison' ],
        abilities: [ 
          {
            name: 'overgrow',
            flavor_text: 'Ups Grass moves in a pinch.'
            },
          {
            name: 'chlorophyll',
            flavor_text: 'Raises Speed in sunshine.'
          }
        ],
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' }
      },
    ]
  },
  {
    username: 'egrubbs',
    pokemon: [
      {
        name: 'Bulbasaur',
        number: '001',
        types: [ 'grass', 'poison' ],
        abilities: [ 
          {
            name: 'overgrow',
            flavor_text: 'Ups Grass moves in a pinch.'
            },
          {
            name: 'chlorophyll',
            flavor_text: 'Raises Speed in sunshine.'
          }
        ],
        sprites: { front_default: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/192px-001Bulbasaur.png' }
      }
    ]
  },
  {
    username: 'mslocum',
    pokemon: [
      {
        name: 'Bulbasaur',
        number: '001',
        types: [ 'grass', 'poison' ],
        abilities: [ 
          {
            name: 'overgrow',
            flavor_text: 'Ups Grass moves in a pinch.'
            },
          {
            name: 'chlorophyll',
            flavor_text: 'Raises Speed in sunshine.'
          }
        ],
        sprites: { front_default: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/192px-001Bulbasaur.png' }
      }
    ]
  },
]

const createMessages = () => {
  const usernames = [ 'amanda_toast', 'mslocum', 'jjklee', 'egrubbs', 'kataing', 'impromptuu', 'bananawayne' ];
  const messages = [ 'Just caught a rare poke!', 'This app is pretty cool', 'I cant wait to catch more pokemon!', 'I sure do love SDC!!!!!',
    'Hack Reactor cohort mates for life <3', 'Pikachu is best pokemon, prove me wrong', 'I liek mudkipzzzz' ]
  let arr = [];
    for (let j = 0; j < usernames.length; j++) {
      let obj = {
        username: usernames[j],
        messages: []
      }
      for (let i = 0; i < 10; i++) {
        obj.messages.push({
          receiver: usernames[j],
          sender: randomizer(usernames),
          content: randomizer(messages),
          timeStamp: moment(new Date()).format('lll')
        });
      }
      for (let i = 0; i < 10; i++) {
        obj.messages.push({
          receiver: randomizer(usernames),
          sender: usernames[j],
          content: randomizer(messages),
          timeStamp: moment(new Date()).format('lll')
        });
      }
      arr.push(obj);
    }
  return arr;
};

const exampleMessageData = createMessages();

module.exports =  {
  exampleMessageData,
  exampleUserData,
  examplePokeData
};