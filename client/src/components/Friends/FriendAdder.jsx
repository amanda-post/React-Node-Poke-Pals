import React from 'react';
import axios from 'axios';

class FriendAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: '',
      status: null
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Updates state based on input into addFriend form
  handleInputChange(e) {
    this.setState({
      friendInput: e.target.value
    });
  };
  
  // Sends a post request to server, adds pending request to requested user's record
  handleSubmit() {
    e.preventDefault();
    let users = {
      sender: CURRENTLY_LOGGED_IN_USER, // TODO
      receiver: this.state.friendInput
    }
    axios.post('/api/addFriend', users)
      .then(() => {
        this.setState({
          status: `Friend request sent to ${users.receiver}!`
        });
      })
      .catch((err) => {
        console.log('Error with sending friend request to: ', users.receiver, err);
      });
  };

  render() {
    <div>
      <form onSubmit={this.handleSubmit} id="addFriendForm">
        <input id="addFriendInput" onChange={this.handleInputChange} placeholder="Type username here..."></input>
        <button id="addFriendButton" className="button">Add To Friends</button>
      </form>
      <div id="sentFriendRequest">{this.state.status}</div>
    </div>
  }
}

export default FriendAdder;