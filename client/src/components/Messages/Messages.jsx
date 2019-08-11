import React from "react";
import axios from "axios";
import MessageListEntry from "./MessageListEntry.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.getMessages = this.getMessages.bind(this);
  }

  componentWillMount() {
    this.getMessages();
  }

  getMessages() {
    axios
      .get(`/api/messages/${this.props.username}`)
      .then(({ data }) => {
        this.setState({
          messages: data[0].messages
        });
      })
      .catch(err => console.log(`Error getting messages for user: ${this.props.username}.`, err));
  }

  render() {
    return (
      <div class="col">
        {this.state.messages.map((message, i) => (
          <MessageListEntry
            user={this.props.username}
            sender={message.sender}
            receiver={message.receiver}
            content={message.content}
            messageId={message._id}
            timeStamp={message.timeStamp}
            show={this.state.showReplyToMessage}
            toggle={this.toggleReplyToMessage}
            update={this.getMessages}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Messages;
