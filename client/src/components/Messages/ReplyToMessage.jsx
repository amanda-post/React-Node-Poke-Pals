import React from "react";
import axios from "axios";

class ReplyToMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      sender: this.props.user, //TODO
      receiver: "MIKULL", // TODO
      content: this.state.messageInput
    };
    axios
      .post("/api/messages", message)
      .then(() => {
        // console.log(`Successfully submitted message from ${sender} to ${receiver}: `, message);
        this.props.update();
        this.props.toggle()
      })
      .catch(err => {
        // console.error(`Error sending message from ${sender} to ${receiver}`, err);
      });
    }
  

  handleInputChange(e) {
    this.setState({
      messageInput: e.target.value
    });
  }

  render() {
    if (this.props.show) {
      return (
        <div>
          <form type="submit" onSubmit={this.handleSubmit}>
            <input
              placeholder="Type message here..."
              onChange={this.handleInputChange}
            />
            <button>Send</button>
          </form>
          <button onClick={this.props.toggle}>Cancel</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ReplyToMessage;
