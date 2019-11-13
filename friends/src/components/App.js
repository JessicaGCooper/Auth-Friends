import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from './LoginPage'
import AddFriendForm from './AddFriendForm';
import FriendList from './FriendList';
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Fake Friends</h1>
        <h3>list Your Frenemies</h3>
      </header>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <PrivateRoute exact path='/friends' component={FriendList} />
        <PrivateRoute exact path='/friends/add' component={AddFriendForm} />
      </Switch>    
      <footer>
        <h3>keep your frenemies close</h3>
      </footer>
      </div>
    </Router>
  );
}

export default App;
