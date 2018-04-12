import React from 'react';
import { Route, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Contact from './Contact';
import Player from './Player';
import FantasyRoster from './FantasyRoster';

class Main extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" exact to="/">AdvanceJS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/teamroster">Team Roster</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/fantasyroster">Fantasy Roster</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/teamroster" component={Roster}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/fantasyroster" component={FantasyRoster}/>
            <Route path="/player/:lname/:fname" component={Player}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;