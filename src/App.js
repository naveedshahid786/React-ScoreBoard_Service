import React, { Component } from 'react';
import './App.css';

function Header() {
    
  return (
    <div className="header">
      
      <h1>Scoreboard Service</h1>
      
    </div>
  );
}

function Player(props) {
  return (
    
      <div className="player-name">
        
        {props.name}
      </div>         
  );
}

class App extends Component {

    constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,  
    }
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.header} 
         players={this.state.players}/>
        
        <div className="players">
          {this.state.players.map((player, index) => {
        
            return (
                
              <Player
                name={player.name}
                score={player.score}
                key={player.id} />
            )
          })}         
        </div>      
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
