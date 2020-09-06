import React, { Component } from 'react';
import './ChampList.css'
import './ApiService'
import ApiService from './ApiService';

class ChampList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectChamp: ''
    }
    this.selectChampion = this.selectChampion.bind(this);
    this.selectTeam = this.selectTeam.bind(this);
  }
  selectChampion(e){
    e.preventDefault();
    this.props.selectChampion(e.target.alt);
    ApiService.selectChamp(e.target.alt);
  }
  selectTeam(e){
    e.preventDefault();
    this.props.selectTeam(e.target.className);
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
        <div 
          className='Blue'
          key='Blue'
          onClick={this.selectTeam}
        >Blue</div>
      );
      list.push(
        <div
          className='Red'
          key='Red'
          onClick={this.selectTeam}
        >Red</div>
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