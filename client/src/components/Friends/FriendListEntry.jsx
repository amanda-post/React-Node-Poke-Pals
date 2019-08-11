import React from "react";
import axios from "axios";

const FriendListEntry = (props) => {
  const deleteFriend = () => {
    let users = { 
      user1: props.username, 
      user2: props.friend 
    }
    axios
      .delete("/api/friends", { data: users})
      .then(() => {
        props.update();
      })
      .catch((err) => {
        console.log("Error deleting friend", err);
      });
  };

  return (
    <div class="row justify-content-around py-1">
      {props.friend}
      <button onClick={deleteFriend}>Unfriend</button>
      {/* <button>Send a message</button> */}
    </div>
  );
};

export default FriendListEntry;
