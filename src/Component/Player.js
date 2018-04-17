import React from "react";
import FullPlayerCard from './FullPlayerCard';

class Player extends React.Component {
    constructor(props) {
    super(props); 
    const {lname, fname} = props.match.params;
        this.state = {
            player: [],
            lastname: lname,
            firstname: fname
        }
        this.goBack = this.goBack.bind(this);
    }

    componentWillMount() {
        fetch(`https://nba-players.herokuapp.com/players-stats/${this.state.lastname}/${this.state.firstname}`)
        .then(response => {
        if(response.ok) return response.json();
        throw new Error('Request failed.');
        })
        .then(data => {
            console.log(data);       
            this.setState({
                player: data
            });
        })
        .catch(error => {
        console.log(error);
        });
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="container">
                <button type="button" className="btn btn-outline-secondary" onClick={this.goBack}>Back</button>
                <FullPlayerCard
                    name={this.state.player.name}
                    team={this.state.player.team_name}
                    ppg={this.state.player.points_per_game}
                    apg={this.state.player.assists_per_game}
                    rpg={this.state.player.rebounds_per_game}
                    bpg={this.state.player.blocks_per_game}
                    fgp={this.state.player.field_goal_percentage}
                    tpp={this.state.player.three_point_percentage}
                    ftp={this.state.player.free_throw_percentage}
                    per={this.state.player.player_efficiency_rating}
                    src={`https://nba-players.herokuapp.com/players/${this.state.lastname}/${this.state.firstname}`}/>
            </div> 
        )
    }
}

export default Player;