import React from "react";
import PlayerCard from './PlayerCard';

class Roster extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        team: 'sas',
        players: [],
        images: [],
        roster: [],
      }

      this.handleChange = this.handleChange.bind(this);
      this.addPlayer = this.addPlayer.bind(this);
  }

  handleChange(event) {
    console.log(this.state.team);
    this.setState({
      team: event.target.value
    });
    
    fetch(`https://nba-players.herokuapp.com/players-stats-teams/${this.state.team}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error('Request failed.');
    })
    .then(data => {
        //console.log(data);       
        this.setState({
          players: data,
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
                    teamName={u.team_name}
                    src={`https://nba-players.herokuapp.com/players/${lastname}/${firstname}`}
                    addPlayer={this.addPlayer}
                    />
            
    });
    return (
      <div className="container">
        <div className="modal fade" id="fantasyRoster" tabIndex="-1" role="dialog" aria-labelledby="fantasyRosterLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="fantasyRosterLabel">Fantasy Roster</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <FantasyList roster={this.state.roster}/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    );
  }
}

class FantasyList extends React.Component {
  render(){
    return(
      <table className="table">
        <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">PPG</th>
              <th scope="col">APG</th>
              <th scope="col">RPG</th>
              <th scope="col">Value</th>
              <th scope="col">Team</th>
            </tr>
          </thead>
          <tbody>
            {this.props.roster.map(item => (
            <tr key={item.id}>
            <td>{item.firstName} {item.lastName}</td>
            <td>{item.ppg}</td>
            <td>{item.apg}</td>
            <td>{item.rpg}</td>
            <td>${item.val}</td>
            <td>{item.team}</td>
            </tr>
            ))}
          </tbody>
      </table>
    )
  }
}

export default Roster;