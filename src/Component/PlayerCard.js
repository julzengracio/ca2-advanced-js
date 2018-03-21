import React, {Component} from 'react';

class PlayerCard extends Component{
    render(){
        return(
            <div className="col-sm">
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img className="card-img-top img-thumbnail" src={this.props.src} alt="Player image not available" style={{height: 216 + 'px'}}/>
                    <div className="card-body">
                        <div className="card-title">
                            {this.props.fname} {this.props.lname}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerCard;