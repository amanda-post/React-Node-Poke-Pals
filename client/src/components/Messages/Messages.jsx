import React from 'react';
import MessageList from './MessageList.jsx';
import ReplyToMessage from './ReplyToMessage.jsx';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      showReplyToMessage: false,
    };
    this.toggleReplyToMessage = this.toggleReplyToMessage.bind(this);
  };

  toggleReplyToMessage() {
    this.setState({
      showReplyToMessage: !(this.state.showReplyToMessage)
    });
  };

  render() {
    <div>
      <MessageList />
      <ReplyToMessage show={this.state.showReplyToMessage} toggle={this.toggleReplyToMessage}/>
    </div>
  }
}

export default Messages;