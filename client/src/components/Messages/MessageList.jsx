import React from 'react';
import MessageListEntry from './MessageListEntry.jsx';

const MessageList = (props) => {
  return(
    <div id="messageList">
      {props.map((message, i) => {
        <MessageListEntry 
          sender={message.sender} 
          messageId={message.messageId} 
          toggle={props.toggle} key={i} />
      })}
    </div>
  );
};

export default MessageList;