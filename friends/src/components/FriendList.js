import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FriendCard from './FriendCard'

const FriendList = () => {
  
  const [friendsList, setFriendsList] = useState([])
  
//   useEffect(() => {
    
//     const getFriends = () => {
//       axios
//         .get('http://localhost:5000/api/friends')
//         .then(response => {
//           setFriends(response.data);
//         })
//         .catch(error => {
//           console.error('Server Error', error);
//         });
//     }
    
//     getfriends();

//   }, []);

  
  return (
    <div className="friendsList">
      {friendsList.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default FriendList;
