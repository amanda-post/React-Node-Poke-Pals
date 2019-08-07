import React from "react";
import axios from "axios";
// import firebase from '../../../init-firebase.js';

import Login from "./Login.jsx";
import Friends from "./Friends/Friends.jsx";
import Messages from "./Messages/Messages.jsx";
import Pokemon from "./Pokemon.jsx";

// var user_logged_in = firebase.auth().currentUser;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "amanda_toast", //todo
      friendsList: [],
      friendRequests: []
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentWillMount() {
    this.getUserInfo();
  }

  getUserInfo() {
    axios
      .get('api/users/739777963964') // REPLACE WITH <user_logged_in> (firebase uid)
      .then(({ data }) => {
        let { username, friendsList, friendRequests } = data;
        this.setState({
          username,
          friendsList,
          friendRequests
        });
      })
      .catch(err => {
        console.log("Error getting user data", err);
      });
  }

  render() {
    // if (!user) {
    //   return (
    //   <div>
    //     <Login />
    //   </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <Friends />
    //       <Messages />
    //       <Pokemon />
    //     </div>
    //   )
    // }
    return (
      <div>
        <Login />
        <Friends
          username={this.state.username}
          friendsList={this.state.friendsList}
          friendRequests={this.state.friendRequests}
          update={this.getUserInfo}
        />
        <Messages username={this.state.username} />
        <Pokemon />
      </div>
    );
  }
}

export default App;
