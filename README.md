# Pokemon Collector!

*A summer 2019 project*

## Flow of the App:

### Creating an account

- User creates an account and logs in using OAuth 2.0 authentication.

- The user's personalized dashboard is loaded, and upon first log-in, the user can choose a starter Pokemon.

### Each user dashboard will have:

- A button to receive a random Pokemon for free, every 24 hours.

#### A Pokemon Section

- Shows the user's pokemon collection, in order by number

- The user can click a Pokemon and see its type, abilities, etc.

#### A Friends Section

- Show list of the user's friends

- Has a component to add friends -- the user can use the input box to add an existing user to their friends list

#### A Messages Section
    
- Shows the user the messages that they have sent or received

- Has a component where the user can respond to or send a message to another user

## How To Start The App

1. Clone and/or fork the repository.
2. In the terminal, run `npm install` in root directory to install dependencies.
3. In a separate terminal tab, run `npm start` to run the Node.js server.
4. To fill database with sample data, run `npm run seed` in the original terminal tab.
5. Webpack can be run using `npm run build`, and the database can be accessed by typing `mongo` into terminal.