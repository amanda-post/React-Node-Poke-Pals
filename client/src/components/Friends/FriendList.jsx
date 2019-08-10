import React from "react";
import FriendsListEntry from "./FriendListEntry.jsx";

const FriendList = (props) => {
  return (
    <div class="container pt-2 border">
      {props.friendsList.map((friend, i) => (
        <FriendsListEntry friend={friend} username={props.username} update={props.update} key={i} />
      ))}
    </div>
  );
};

export default FriendList;
