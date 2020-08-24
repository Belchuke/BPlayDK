import React from 'react';
import logo from './logo.svg';
import './App.css';
import Create from './componets/createusercomponet/create';
import Login from './componets/logincomponet/login';
import Maincomponet from './componets/mainview/maincomponet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { create } from 'domain';
import { useHistory } from "react-router-dom";

function App() {
  let apphistory = useHistory();
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Login></Login>
        </Route>

        <Route path="/createUser">
          <Create></Create>
        </Route>

        <Route path="/login">
          <Maincomponet></Maincomponet>
        </Route>
      </div>
    </Router>
  );
}



export default App;
