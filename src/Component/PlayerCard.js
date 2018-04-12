import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class PlayerCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.defaultImg = this.defaultImg.bind(this);
    }

    defaultImg(e) {
        e.target.src = '../Assets/nba-logo.jpg'
    }

    handleClick(e) {
        e.preventDefault();
        const player = {
            firstName: this.props.fname,
            lastName: this.props.lname,
            id: Date.now()
        };
        this.props.addPlayer(player);
    }

    render(){
        return(
            <div className="col-sm">
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img className="card-img-top img-thumbnail" src={this.props.src} alt="Not available" style={{height: 216 + 'px'}}/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.fname} {this.props.lname}</h4>
                        <ul className="card-text">
                            <li>Points Per Game: {this.props.ppg}</li>
                            <li>Assists Per Game: {this.props.apg}</li>
                            <li>Rebounds Per Game: {this.props.rpg}</li>
                            <li>Value: ${this.props.sal}</li>
                        </ul> 
                        <NavLink to={`/player/${this.props.lname}/${this.props.fname}`}>View Player</NavLink>
                        <button type="button" className="btn btn-secondary addIcon" onClick={this.handleClick}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerCard;