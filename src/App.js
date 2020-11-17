import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
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
    
  );
}

export default App;
