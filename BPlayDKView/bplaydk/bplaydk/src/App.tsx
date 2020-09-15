import React from 'react';
import './App.css';
import Create from './componets/createusercomponet/create';
import Login from './componets/logincomponet/login';
import Maincomponet from './componets/mainview/maincomponet';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { ContextProvider} from './componets/contextComponet/contextComponet';

function App() {

  

  return (
    <ContextProvider>
      
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
  </ContextProvider>
  
  );
}



export default App;
