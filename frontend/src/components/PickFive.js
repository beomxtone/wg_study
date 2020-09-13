import React, { Component } from 'react';
import PickChamp from './PickChamp'

class PickFive extends Component {
  constructor(props){
    super(props);
    this.state = {
      pick1: [1, 4, 5, 8, 9],
      pick2: [2, 3, 6, 7, 10]
    }
    this.champName = this.champName.bind(this);
  }
  champName(pickNum, pickCount){
    if(pickNum === pickCount) {
      return(this.props.champName);
    } else if(pickNum > pickCount){
      return('Default');
    } else {
      return(this.props.champName);
    }
  }
  teamCheck(team){
    if(team === 'Blue'){
      return(this.state.pick1);
    } else if(team === 'Red'){
      return(this.state.pick2);
    } else{
      return(this.state.pick1);
    }
  }
  render() {
    const divStyle = {
      width: '100px',
      height: '500px',
      float: 'left',
      margin: '10px'
    }
    var list = [];
    var i=1;
    while(i < 6){
      list.push(
        <PickChamp
          url={this.props.url}
          team={this.props.team}
          allyEnemy={this.props.allyEnemy}
          key={this.teamCheck(this.props.team)[i-1]}
          pickNum={this.teamCheck(this.props.team)[i-1]}
          pickCount={this.props.pickCount}
          champName={this.champName(this.teamCheck(this.props.team)[i-1], this.props.pickCount)}
        ></PickChamp>
      );
      i=i+1;
    }
    return(
      <div 
        className={this.props.team + 'Team'} 
        style={divStyle}
        >
        {this.props.team}
        {list}
      </div>
    );
  }
}

export default PickFive;