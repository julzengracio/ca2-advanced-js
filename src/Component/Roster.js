import React from "react";
import PlayerCard from './PlayerCard';

class Roster extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        team: 'sas',
        players: [],
        images: [],
        roster: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.addPlayer = this.addPlayer.bind(this);
  }

  handleChange(event) {
    console.log(this.state.team);
    this.setState({team: event.target.value});

    fetch(`https://nba-players.herokuapp.com/players-stats-teams/${this.state.team}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
        //console.log(data);       
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
        //console.log(data);       
        this.setState({
          players: data
        });
    })
    .catch(error => {
      console.log(error);
    });
  }

  addPlayer(player) {
    //console.log(player);
    this.setState(prevState => ({
      roster: prevState.roster.concat(player)
    }));
    console.log(this.state.roster);
  }

  render() {
    let list = this.state.players.map( (u, i) => {
    let fullname = u.name.split(' ');
    let firstname = fullname[0];
    let lastname = fullname[1];
    let salary = (u.points_per_game*100 + u.assists_per_game*100 + u.rebounds_per_game*100);
    return <PlayerCard key={i} 
                    fname={firstname} 
                    lname={lastname}
                    ppg={u.points_per_game}
                    apg={u.assists_per_game}
                    rpg={u.rebounds_per_game}
                    sal={salary}
                    src={`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`}
                    addPlayer={this.addPlayer}
                    />
            
    });
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>
              <h3>Select a Team</h3>
              <select className="form-control" value={this.state.value} onChange={this.handleChange} onClick={this.handleChange}>
                <option value="sas">San Antionio Spurs</option>
                <option value="bos">Boston Celtics</option>
                <option value="lal">Los Angeles Lakers</option>
                <option value="cle">Cleveland Cavaliers</option>
                <option value="hou">Houston Rockets</option>
                <option value="gsw">Golden State Warriors</option>
                <option value="okc">Oklahoma City Thunder</option>
                <option value="nor">New Orleans Pelicans</option>
                <option value="mil">Milwaukee Bucks</option>
                <option value="den">Denver Nuggets</option>
              </select>
            </label>
          </div>
        </form>
        <div className="row">
          {list}
        </div>
        <div className="row">
          <FantasyList roster={this.state.roster}/>
        </div>
      </div>
    );
  }
}

class FantasyList extends React.Component {
  render(){
    return(
      <ul>
        {this.props.roster.map(item => (
          <li key={item.id}>{item.firstName}</li>
        ))}
      </ul>
    )
  }
}

export default Roster;