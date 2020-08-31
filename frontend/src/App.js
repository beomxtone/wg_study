import React, { Component } from 'react';
import './App.css';
import ChampList from './components/ChampList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <ChampList></ChampList>
      </div>
    );
  }
}

export default App;
