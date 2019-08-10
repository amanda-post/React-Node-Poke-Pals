import React from "react";
import axios from "axios";
import FriendList from "./FriendList.jsx";
import FriendAdder from "./FriendAdder.jsx";
import FriendRequestEntry from "./FriendRequestEntry.jsx";

const Friends = (props) => {
  return (
    <div class="col container border">
      <FriendAdder username={props.username} update={props.update}/>
      {(props.friendRequests.length > 0) ? (
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
        </div>) : null}
      <FriendList username={props.username} update={props.update} friendsList={props.friendsList} />
    </div>
  );
};

export default Friends;
