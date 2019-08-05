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

let exampleUserData = {
  uid: randomIdGenerator(),
  username: 'amanda_toast',
  friendsList: [ 'mslocum', 'ktaing', 'impromptuu', 'egrubbs' ],
  friendRequests: [ 'tklee' ]
}

let examplePokeData = {
  username: 'amanda_toast',
  pokemon: [
    {
      name: 'Bulbasaur',
      number: 001,
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
      sprites: [ 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/192px-001Bulbasaur.png' ]
    }
  ]
}

const createMessages = () => {
  const usernames = [ 'amanda_toast', 'mslocum', 'jjklee', 'egrubbs', 'kataing' ];
  const messages = [ 'Just caught a rare poke!', 'This app is pretty cool', 'I cant wait to catch more pokemon!' ]
  let arr = [];
  for (let i = 0; i <= 20; i++) {
    arr.push({
      receiver: randomizer(usernames),
      sender: randomizer(usernames),
      content: randomizer(messages),
      timeStamp: new Date()
    });
  }
  return arr;
};

const exampleMessageData = {
  username: 'amanda_toast',
  messages: createMessages()
};

module.exports =  {
  exampleMessageData,
  exampleUserData,
  examplePokeData
};