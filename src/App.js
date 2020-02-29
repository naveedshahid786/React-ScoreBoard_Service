import React, { Component } from 'react';

import './App.css';

function Header() {
  return (
    <div className="header">
      
      <h1>Scoreboard Service</h1>
      
    </div>
  );
}

class App extends Component {
  
  render() {
    return (
      <div className="scoreboard">
        <Header title={this.header}  />          
                         
        </div>
    
    );
  }
}

App.defaultProps = {
 initialPlayers: [
    {
      name: "Naveed Shahid",
      score: 0,
      key: 1
    },
    {
      name: "Kamran Khan",
      score: 0,
      key: 2
    },
    {
      name: "Umer Allaudin",
      score: 0,
      key: 3
    }
  ]
}

export default App;

