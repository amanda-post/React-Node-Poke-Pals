import React from "react";
import axios from "axios";
import FriendList from "./FriendList.jsx";
import FriendAdder from "./FriendAdder.jsx";
import FriendRequestEntry from "./FriendRequestEntry.jsx";

const Friends = (props) => {
  return (
    <div>
      <FriendAdder username={props.username} />
      <div>
        You have pending friend request(s)!
        {props.friendRequests.map((user, i) => (
          <FriendRequestEntry
            update={props.update}
            username={props.username}
            sender={user}
            key={i}
          />
        ))}
      </div>
      <FriendList username={props.username} update={props.update} friendsList={props.friendsList} />
    </div>
  );
};

export default Friends;
