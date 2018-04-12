import React, {Component} from 'react';

class FullPlayerCard extends Component {
    render() {
        return (
            <div className="col-sm">
                <div className="card" style={{width: 100 + '%'}}>
                    <img className="card-img-top img-thumbnail" 
                        src={this.props.src} 
                        alt="Not available" 
                        style={{
                            height: 216 + 'px', 
                            width: 18 + 'rem',
                            border: 0 + 'px'
                        }}/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{this.props.team}</h6>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">PPG</th>
                                    <th scope="col">APG</th>
                                    <th scope="col">RPG</th>
                                    <th scope="col">BPG</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.ppg}</td>
                                    <td>{this.props.apg}</td>
                                    <td>{this.props.rpg}</td>
                                    <td>{this.props.bpg}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default FullPlayerCard;