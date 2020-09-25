
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './assets/css/main.css';

//components from that html5 place
import Mainpage from './components/Mainpage';
import Details from './components/Details';
import Learned from './components/Learned';

function App() {
  return (
    <Router>
      <div className="App">
            <div className="tabs">
              <Link className="tab" to="/">Mainpage</Link>
              <Link className="tab" to="/about">Details</Link>
              <Link className="tab" to="/portfolio">Learned</Link>
            </div>
        <Switch>
          <Route exact path="/">
            <Mainpage/>
          </Route>
          <Route exact path="/details">
            <Details/>
          </Route>
          <Route exact path="/learned">
            <Learned/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;