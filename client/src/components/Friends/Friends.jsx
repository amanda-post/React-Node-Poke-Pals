import React from "react";
import axios from "axios";
import FriendList from "./FriendList.jsx";
import FriendAdder from "./FriendAdder.jsx";
import FriendRequestEntry from "./FriendRequestEntry.jsx";

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList: [],
      friendRequests: []
    }
    this.getFriendInfo = this.getFriendInfo.bind(this);
  }

  componentWillMount() {
    this.getFriendInfo();
  }

  getFriendInfo() {
    axios
      .get(`/api/friends/${this.props.username}`)
      .then(({data}) => {
        this.setState({
          friendsList: data.friendsList,
          friendRequests: data.friendRequests
        })
      })
      .catch(err => console.log(`Error getting friend data for user: ${this.props.username}.`, err))
  }

  render() {
    let { username } = this.props;
    let { friendsList, friendRequests } = this.state;
    return (
      <div class="col container border">
        <FriendAdder username={username} update={this.getFriendInfo}/>
        {(friendRequests.length > 0) ? (
          <div>
            {(friendRequests.length === 1) ? ('You have a pending friend request!') : ('You have pending friend requests!')}
            {friendRequests.map((user, i) => (
              <FriendRequestEntry
                update={this.getFriendInfo}
                username={username}
                sender={user}
                key={i}
              />
            ))}
          </div>) : null}
        <FriendList username={username} update={this.getFriendInfo} friendsList={friendsList} />
      </div>
    );
  }
};

export default Friends;
