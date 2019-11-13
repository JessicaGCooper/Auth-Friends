import React, { useState } from 'react'

const AddFriendForm = () => {

    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     props.postFriend(name, age, email);
    // }

    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="addFriendForm">
            <h1>Add Friend</h1>
        <form onSubmit={() => {}}>
        <div className="fieldContainer">
            <div className="name">
              <label htmlFor="name"><h3>Name</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="name" placeholder="Friend Name" size="30"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="age">
              <label htmlFor="age"><h3>Age</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="text" name="age" placeholder="Friend Age" size="30"/>
              </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="email">
              <label htmlFor="email"><h3>Email</h3></label>
              <div className="inputContainer">
                <input onChange={handleChange} type="email" name="email" placeholder="Friend email" size="30"/>
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