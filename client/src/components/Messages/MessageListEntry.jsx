import React from 'react';

const MessageListEntry = (props) => {
  const handleDelete = (messageId) => {
    axios
      .delete(`/api/messages/${CURRENTLY_LOGGED_IN_USER}/${messageId}`)
      .then()
      .catch();
  };

  return(
    <div className="messageListEntry">
      <span>{`To: ${props.receiver}`}</span>
      <span>{`From: ${props.sender}`}</span>
      <div className="messageContent">{props.content}</div>
      <div id="messageButtonsContainer">
        <button id="replyMessageButton" onClick={props.toggle()}>Reply</button>
        <button id="deleteMessageButton" onClick={handleDelete(props.messageId)}>Delete</button>
      </div>
    </div>
  );
};

export default MessageListEntry;