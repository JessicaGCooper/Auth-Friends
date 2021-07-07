import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'
import FriendCard from './FriendCard'

const FriendList = () => {
  
  const [friendsList, setFriendsList] = useState([])

  useEffect(() => {
  
    axiosWithAuth()
        .get('/api/friends')
        .then(response => { 
            console.log(response)
            setFriendsList(response.data)
            })
        .catch(error => console.error('Server Error', error));
  }, [setFriendsList]);

  
  return (
    <div className="friendsList">
      <h2>Frenemy List</h2>
      <div className="buttonContainer">
            <Link to='/friends/add'>
                <button>Add Friend</button>
            </Link>
        </div>
      {friendsList.map(friend => (
        <FriendCard key={friend.id} friend={friend} />
      ))}
    </div>
  );
}

export default FriendList;
