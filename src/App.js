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

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChange(e) {
    this.setState({name: e.target.value});
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ""})
  }
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers,
      nextId: this.props.initialPlayers.length + 1,
    }
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
  }
    
  onScoreChange(index, delta) {
    let players = this.state.players.slice();
    players[index].score += delta;
    this.setState({players: players});
  }
    
  onPlayerAdd(name) {
    let players = this.state.players.slice();
    players.push({
      name: name,
      score: 0,
      id: this.state.nextId,    
    });
    this.setState({players: players});
    this.setState({nextId: this.state.nextId + 1})
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
            <AddPlayerForm onAdd={this.onPlayerAdd} />
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
