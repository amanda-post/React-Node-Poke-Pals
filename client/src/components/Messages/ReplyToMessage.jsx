import React from 'react';
import axios from 'axios';

const ReplyToMessage = (props) => {
  let replyBox = document.getElementById("replyToMessage");
  if (props.show) {
    replyBox.appendChild(<Body />)
  } else {
    return null;
  }
};

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      sender: CURRENTLY_LOGGED_IN_USER, //TODO
      receiver: this.props.sender,
      content: this.state.messageInput
    };
    axios
      .post('/api/messages', message)
      .then(() => {
        console.log(`Successfully submitted message from ${sender} to ${receiver}: `, message)
      })
      .catch((err) => {
        console.error(`Error sending message from ${sender} to ${receiver}`, err)
      }); 
  };

  handleInputChange (e) {
    this.setState({
      messageInput: e.target.value
    });
  };

  render() {
    <div>
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Type message here..." onChange={this.handleInputChange}></input>
        <button>Send</button>
      </form>
      <button onClick={props.toggle()}>Cancel</button>
    </div>
  }
}

export default ReplyToMessage;