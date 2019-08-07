import React from 'react';
import axios from 'axios';

const FriendRequestEntry = (props) => {
  const handleResponseToFriendRequest = (e) => {
    let data = {
      sender: e.target.name,
      receiver: props.username,
      response: e.target.dataset.response
    };
    axios
      .put(`/api/friends/`, data)
      .then(() => {
        props.update();
      })
      .catch();
  }

  return(
    <div>
      <span>{props.sender}</span>
      <button name={props.sender} data-response="accept" onClick={handleResponseToFriendRequest}>Accept</button>
      <button name={props.sender} data-response="decline" onClick={handleResponseToFriendRequest}>Decline</button>
    </div>
  )
}

export default FriendRequestEntry;