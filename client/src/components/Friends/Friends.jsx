import React from 'react';
import FriendList from './FriendList.jsx';
import FriendAdder from './FriendAdder.jsx/index.js';

const Friends = (props) => {
  return(
    <div>
      <FriendList />
      <FriendAdder />
    </div>
  );
};

export default Friends;