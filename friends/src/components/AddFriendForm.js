import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriendForm = (props) => {
    console.log('props', props)
    
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth()
         .post('/api/friends', newFriend)
         .then( res => {
             console.log(res);
             //redirect to main friends list
             history.push("/friends")
            //  props.history.push('/friends')
         })
         .catch( err => console.log(err));
    }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="addFriendForm">
            <h1>Add Friend</h1>
        <form onSubmit={handleSubmit}>
        <div className="fieldContainer">
            <div className="name">
              <label htmlFor="name"><h3>Name</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="name" value={newFriend.name} placeholder="Friend Name" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="age">
              <label htmlFor="age"><h3>Age</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="age" value={newFriend.age} placeholder="Friend Age" size="30" required/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="email">
              <label htmlFor="email"><h3>Email</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="email" name="email" value={newFriend.email} placeholder="Friend email" size="30" required/>
              </div>
            </div>
        </div>
        <div className="formButtonContainer">
            <button type="submit">Add Friend</button>
        </div>
      </form>    
    </div>  
    )
}

export default AddFriendForm