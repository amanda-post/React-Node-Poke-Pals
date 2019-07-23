>> Pokemon Collector!

*** Flow of App: ***

- User creates an account with a username and password

- User must log-in with their credentials in order to see their dashboard

- User can choose a start Pokemon

- User's dashboard will conditionally render their data from the database:

    - Collected Pokemon

    - Friends List

- Every dashboard will have:

    - A button to receive a random Pokemon for free, once a day!

    - The user's pokemon list, in order by number [Pokemon.jsx]

    - The ability to click a Pokemon and see its type, abilities, etc. --> [Pokemon_Viewer]

    - A "friends" component which has: [Friends]
    
        - A list of the user's friends [Friends_List]

        - An input box to add an existing user to their friends list [Friends_Adder]

