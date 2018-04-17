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
                                    <th scope="col">Points Per Game</th>
                                    <th scope="col">Assists Per Game</th>
                                    <th scope="col">Rebounds Per Game</th>
                                    <th scope="col">Blocks Per Game</th>
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
                            <thead>
                                <tr>
                                    <th scope="col">Field Goal %</th>
                                    <th scope="col">Three Point %</th>
                                    <th scope="col">Free Throw %</th>
                                    <th scope="col">Player Efficiency Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.props.fgp}</td>
                                    <td>{this.props.tpp}</td>
                                    <td>{this.props.ftp}</td>
                                    <td>{this.props.per}</td>
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