import React from 'react';
import Connect4 from './lib'

// Components
import Board from './Board';
import BoardStatus from './BoardStatus';


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
