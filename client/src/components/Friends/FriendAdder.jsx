import React from 'react';
import axios from 'axios';

class FriendAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendInput: '',
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
  handleSubmit(e) {
    e.preventDefault();
    let users = {
      sender: this.props.username,
      receiver: this.state.friendInput
    }
    axios.post('/api/friends', users)
      .then(() => {
        this.props.update();
      })
      .catch((err) => {
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="addFriendForm">
          <input id="addFriendInput" onChange={this.handleInputChange} placeholder="Type username here..."></input>
          <button id="addFriendButton" type="submit">Add To Friends</button>
        </form>
      </div>
    )
  }
}

export default FriendAdder;