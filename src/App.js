import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';




function App() {
  
  return (
    
      <Router>

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
    
  );
}

export default App;
