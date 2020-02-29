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
    
<div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}> &times; </a>
        {props.name}
      </div>
                
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange} />          
      </div>
    </div>
  );
}

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.onChange(-1)}> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={() => props.onChange(1)}> + </button>
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
  onScoreChange(index, delta) {
    let players = this.state.players.slice();
    players[index].score += delta;
    this.setState({players: players});
  }

  onPlayerRemove(index) {
    let players = this.state.players.slice();
    players.splice(index, 1);
    this.setState({players: players});
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
                key={player.id}
                onScoreChange={(delta) => {this.onScoreChange(index, delta)}}
                onRemove={() => {this.onPlayerRemove(index)}} />
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
