import React, { Component } from 'react';
import './ChampList.css'

class ChampList extends Component {
  constructor(props){
    super(props);
    this.selectChampion = this.selectChampion.bind(this);
  }
  selectChampion(e){
    e.preventDefault();
    this.props.selectChampion(e.target.alt);
  }
  selectTeam(e){
    e.preventDefault();
    console.log(e.currentTarget.className);
    debugger;
  }
  render() {
    var list = [];
    var champions = this.props.champions;
    var i=0;

    if(this.props.team === 'Blue' || this.props.team === 'Red') {
      while(i < champions.length){
        if(champions[i].picked === false) {
          list.push(
            <img 
              className='unpicked'
              src={this.props.url + champions[i].name_en + '.png'} 
              alt={champions[i].name_en}
              align='left'
              key={champions[i].name_en}
              onClick = {this.selectChampion}
            ></img>
          );
        } else {
          list.push(
            <img 
              className='picked'
              src={this.props.url + champions[i].name_en + '.png'} 
              alt={champions[i].name_en}
              align='left'
              key={champions[i].name_en}
            ></img>
          );
        }
        i=i+1;
      }
    }
    else {
      list.push(
        <img 
          className='BlueTeam'
          key='Blue'
          alt='Blue'
          onClick={this.selectTeam}
        ></img>
      );
      list.push(
        <img
          className='RedTeam'
          key='Red'
          alt='Red'
          onClick={this.selectTeam}
        ></img>
      )
    }

    return (
      <div className='view'>
        {list}
      </div>
    );
  }
}

export default ChampList;