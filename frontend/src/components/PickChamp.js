import React, { Component } from 'react';
import ApiService from './ApiService'

class PickChamp extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedChampName: 'Default'
    }
  }
  render(){
    const divStyle = {
      width: '90px',
      height: '90px',
      borderRadius: '70%',
      border: '1px solid black',
      margin: '15px'
    }
    const pickStyle = {
      width: '90px',
      height: '90px',
      borderRadius: '70%',
      overflow: 'hiddeen'
    }
    var url;
    if(this.state.selectedChampName === 'Default') {
      url = 'https://www.beautycolorcode.com/43464b.png'
      if(this.props.champName !== 'Default') {
        this.setState({
          selectedChampName: this.props.champName
        });
        url = this.props.url + this.state.selectedChampName + '.png'
        if(this.props.allyEnemy === 'Ally') {
          ApiService.getCC(this.props.champName);
          ApiService.getType(this.props.champName);
        } else if(this.props.allyEnemy === 'Enemy') {
          ApiService.getCounter(this.props.champName);
        }
      }
    } else {
      url = this.props.url + this.state.selectedChampName + '.png'
    }

    return(
      <div style={divStyle}>
        <img 
          src={url}
          alt={this.state.champName}
          style={pickStyle}
        ></img>
      </div>
    );
  }
}

export default PickChamp;