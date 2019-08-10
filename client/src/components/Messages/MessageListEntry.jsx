import React from "react";
import axios from "axios";
import moment from "moment";
import ReplyToMessage from "./ReplyToMessage.jsx";

class MessageListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReplyToMessage: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleReplyToMessage = this.toggleReplyToMessage.bind(this);
  }

  handleDelete() {
    axios
      .delete(`/api/messages/${this.props.user}/${this.props.messageId}`)
      .then(() => {
        this.props.update();
      })
      .catch();
  }

  toggleReplyToMessage() {
    this.setState({
      showReplyToMessage: !this.state.showReplyToMessage
    });
  }

  render() {
    return (
      <div id="messageListEntry" class="py-2 border">
        <div>{`To: ${this.props.receiver}\n`}</div>
        <div>{`From: ${this.props.sender}\n`}</div>
        <div>{`${moment(this.props.timeStamp).format("lll")}\n`}</div>
        <div id="messageContent">{this.props.content}</div>
        <div id="messageButtonsContainer">
          <button id="replyMessageButton" onClick={this.toggleReplyToMessage}>Reply</button>
          <button id="deleteMessageButton" onClick={this.handleDelete}>Delete</button>
        </div>
        <ReplyToMessage
          show={this.state.showReplyToMessage}
          toggle={this.toggleReplyToMessage}
          user={this.props.user}
          sender={this.props.sender}
          update={this.props.update}
        />
      </div>
    );
  }
}

export default MessageListEntry;
