import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'


const LoginPage = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }) 
    }

    const handleSubmit = e => {
        e.preventDefault();
        // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
        axiosWithAuth().post('/api/login', user)
         .then( res => console.log(res))
         .catch( err => console.log(err));

    }

    return (
      <div className="loginForm">
      <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
        <div className="fieldContainer">
            <div className="name">
              <label htmlFor="name"><h3>Name</h3></label>
                <div className="inputContainer">
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className="fieldContainer">
            <div className="password">
              <label htmlFor="password"><h3>Password</h3></label>
                <div className="inputContainer">
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
            </div>
        </div>
        <div className="formButtonContainer">
          <button>Log in</button>
        </div>
        </form>
      </div>
    )
}

export default LoginPage