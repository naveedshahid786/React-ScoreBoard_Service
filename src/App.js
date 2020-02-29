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


export default App;