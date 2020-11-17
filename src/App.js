import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
export const UserContext = createContext();




function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>

      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>

import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';


function App() {
  return (

      <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/apartment/:apartmentId/:apartmentTitle/:apartmentPrice">
          <ApartmentDetails></ApartmentDetails>
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>


    </Router>
   </ UserContext.Provider>



        <Switch>
          <Route path = "/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path = "/board" >
              <Dashboard/>
          </Route>
          <Route path = "*">
            <NoMatch />
          </Route>
         
        </Switch>

      </Router>

      </Switch>
    </Router>

    
  );
}

export default App;
