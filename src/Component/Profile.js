import React from "react";
import PlayerCard from './PlayerCard';

class Profile extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        team: 'sas',
        players: [],
        images: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({team: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.team);
    event.preventDefault();
    
    fetch(`https://nba-players.herokuapp.com/players-stats-teams/${this.state.team}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
        console.log(data);       
        this.setState({
          players: data
        });
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentWillMount() {
    fetch(`https://nba-players.herokuapp.com/players-stats-teams/${this.state.team}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
        console.log(data);       
        this.setState({
          players: data
        });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    let list = this.state.players.map( (u, i) => {
      let fullname = u.name.split(' ');
      let firstname = fullname[0];
      let lastname = fullname[1];
      return <PlayerCard key={i} fname={firstname} lname={lastname} src={`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`}/>
    });
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Select a Team:
              <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                <option value="sas">San Antionio Spurs</option>
                <option value="bos">Boston Celtics</option>
                <option value="lal">Los Angeles Lakers</option>
                <option value="cle">Cleveland Cavaliers</option>
                <option value="hou">Houston Rockets</option>
                <option value="gsw">Golden State Warriors</option>
                <option value="okc">Oklahoma City Thunder</option>
                <option value="nop">New Orleans Pelicans</option>
                <option value="mil">Milwaukee Bucks</option>
                <option value="den">Denver Nuggets</option>
              </select>
            </label>
            <button type="submit" className="btn btn-primary mb-1">View Roster</button>
          </div>
        </form>
        <div className="row">
          {list}
        </div>
      </div>
    );
  }
}

export default Profile;