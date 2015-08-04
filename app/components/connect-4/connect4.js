import React from 'react';
import Connect4 from './lib';

// Components
import Board from './board';
import BoardStatus from './board-status';


export default class Connect4Component extends React.Component {

  constructor() {
    super();

    this.state = {
      board: new Connect4.Board()
    };
  }

  handleGameRestart() {
    this.setState({
      board: new Connect4.Board()
    });
  }

  /**
   * Function called when each cell is clicked, adding piece and re-render UI
   * @param  {Number} columnIndex
   * @param  {String} piece
   * @return {Void}
   */
  handleGameAddPiece(columnIndex, piece) {

    // Does nothing if board is inactive
    if (!this.state.board.isActive) {
      return;
    }

    // Add piece
    this.state.board.addPiece(columnIndex, piece);

    // Reresh state with newly changed
    this.setState({
      board: this.state.board
    });

  }

  render() {
    return (
      <div>
        <Board board={this.state.board} addPiece={this.handleGameAddPiece.bind(this)} />
        <BoardStatus board={this.state.board} restart={this.handleGameRestart.bind(this)} />
      </div>
    );
  }

}
