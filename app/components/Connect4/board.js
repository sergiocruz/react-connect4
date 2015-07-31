import React from 'react';
import classNames from 'classnames';
import Connect4 from './lib';
import Cell from './cell';

export default React.createClass({

  /**
   * Required properties
   * @type {Object}
   */
  propTypes: {
    board: React.PropTypes.instanceOf(Connect4.Board),
    refresh: React.PropTypes.func.isRequired
  },

  /**
   * Function called when each cell is clicked, adding piece and re-render UI
   * @param  {Number} columnIndex
   * @param  {String} piece
   * @return {Void}
   */
  handleAddPiece(columnIndex, piece) {

    // Does nothing if board is inactive
    if (!this.props.board.isActive) {
      return;
    }

    // Add piece
    this.props.board.addPiece(columnIndex, piece);

    // Refresh rest of UI
    this.props.refresh();

  },

  /**
   * Render all the things
   * @return {JSX}
   */
  render() {

    // Shortcut to props board
    let board = this.props.board;

    // Grid CSS classes
    let gridClasses = classNames({
      'connect4-grid': true,
      'connect4-grid--active': board.isActive,
      'connect4-grid--inactive': !board.isActive
    });

    return (
      <div className={gridClasses}>

        {board.grid.map((column, columnIndex) => {

          return (
            <div className="connect4-column">

              {column.map((cell, y) => {

                let cellClasses = classNames({
                  'connect4-cell': true,
                  'connect4-cell--red': (cell === 'red'),
                  'connect4-cell--blue': (cell === 'blue')
                });

                return (
                  <button
                    className={cellClasses}
                    onClick={this.handleAddPiece.bind(
                      this,
                      columnIndex,
                      board.nextPlayer
                    )}>
                  </button>
                );

              })}
            </div>
          );

        })}
      </div>
    );
  }
});
