import React from "react";
import axios from "axios";

import Login from "./FrontPage/Login.jsx";
import Friends from "./Friends/Friends.jsx";
import Messages from "./Messages/Messages.jsx";
import Pokemon from "./Pokemon/Pokemon.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser(user) {
    this.setState({
      username: user
    });
  }

  render() {
    if (!this.state.username) {
      return (
      <div>
        <Login update={this.setCurrentUser}/>
      </div>
      )
    } else {
      return (
        <div class="container-fluid">
          <div class="row justify-content-md-center">
            <Friends username={this.state.username}/>
            <Pokemon username={this.state.username}/>
            <Messages username={this.state.username}/>
          </div>
        </div>
      )
    }
  }
}

export default App;
