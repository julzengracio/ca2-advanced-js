import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to NBA Roster</h1>
          <p className="lead">Check the Roster of the teams in the NBA, Create your own Team by adding each player to a Fantasy Roster, check and see the stats for each players.</p>
        </div>
      
        <div className="col-md align-center">
          <h1>Playoff Picture</h1>
          <img src={require("../Assets/playoffpicture.png")}/>
        </div>
      </div>
    );
  }
}

export default Home;