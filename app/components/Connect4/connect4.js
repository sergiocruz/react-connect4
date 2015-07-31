import React from 'react';
import Connect4 from './lib'

// Components
import Board from './board';
import BoardStatus from './board-status';


export default React.createClass({

  getInitialState: function() {
    return {
      board: new Connect4.Board()
    };
  },

  handleGameRestart() {
    this.setState({
      board: new Connect4.Board()
    });
  },

  handleGameRefresh() {
    console.log('refrshing!');
    this.forceUpdate();
  },

  render() {
    return (
      <div>
        <Board board={this.state.board} refresh={this.handleGameRefresh} />
        <BoardStatus board={this.state.board} restart={this.handleGameRestart} />
      </div>
    );
  }
});
