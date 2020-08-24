import React from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './componets/createusercomponet/create';
import Login from './componets/logincomponet/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";
import { create } from 'domain';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route path="/createUser">
          <Create></Create>
        </Route>
      </div>
    </Router>
  );
}

export default App;
