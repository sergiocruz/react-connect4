import React from 'react';
import Board from './board';
import Connect4 from './lib'

let board = new Connect4.Board();

export default React.createClass({
  render() {
    return (
      <Board board={board} />
    );
  }
});
