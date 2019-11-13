import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginPage from './LoginPage'
// import AddFriendForm from './AddFriendForm';
import FriendList from './FriendList';
// import Navigation from './Navigation'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1>Fake Friends</h1>
        <h3>list Your Frenemies</h3>
      </header>
      <Switch>
        <Route path='/' component={LoginPage} />
        <Route exact path='/friends' component={FriendList} />
      </Switch>    
      <footer>
        <h3>keep your frenemies close</h3>
      </footer>
      </div>
    </Router>
  );
}

export default App;


      {/* <footer>
        <h3>keep your frenemies close</h3>
      </footer>

      <header className="App-header">
        <h1>Fake Friends</h1>
        <h3>list Your Frenemies</h3>
      </header>  */}