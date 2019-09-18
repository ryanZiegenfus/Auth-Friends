import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Welcome from './components/Welcome'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'

function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/" className='navLink'>Home</Link>
          <Link to="/friends" className='navLink'>Friends</Link>
          <Link to="/login" className='navLink'>Login</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/friends" component={FriendsList}> </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
