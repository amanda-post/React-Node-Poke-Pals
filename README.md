# Pokemon Collector!

*Note: as of 8/8/19, I have made this repo public so that my React code can be viewed.*

*I focused on creating best-practice functionality first, and have added some minimal bootstrap/CSS thusfar.*

*All functionalities mentioned in commit messages are up and running.*

## Flow of the App:

### Creating an account

- User creates an account and logs in using Passport.js local-authentication, with a username and a password

- The user's personalized dashboard is loaded, and upon first log-in, the user can choose a starter Pokemon

### Each user dashboard will have:

- A button to receive one random pokemon to add to their collection, up to every 24 hours

#### A Pokemon Section

- Shows the user's pokemon collection, in order by number

- The user can click a Pokemon and see its type, abilities, etc.

#### A Friends Section

- Show list of the user's friends

- Has a component to add friends -- the user can use the input box to add an existing user to their friends list

- Ability to delete friends, and message friends from the friends component

#### A Messages Section
    
- Shows the user the messages that they have sent or received

- Has a component where the user can respond to or send a message to another user

- User has ability to delete messages from their personal inbox

## How To Start The App

1. Clone and/or fork the repository.
2. In the terminal, run `npm install` in root directory to install dependencies.
3. In a separate terminal tab, run `npm start` to run the Node.js server.
4. To fill database with sample data, run `npm run seed` in the original terminal tab.
5. Webpack can be run using `npm run build`, and the database can be accessed by typing `mongo` into terminal.
