import React from "react";
import FriendsListEntry from "./FriendListEntry.jsx";

const FriendList = (props) => {
  return (
    <div>
      {props.friendsList.map((friend, i) => (
        <FriendsListEntry friend={friend} username={props.username} update={props.update} key={i} />
      ))}
    </div>
  );
};

export default FriendList;
