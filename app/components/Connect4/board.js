import React from 'react';
import Connect4 from './lib';
import Cell from './cell';
import classNames from 'classnames';

export default React.createClass({

  /**
   * Required properties
   * @type {Object}
   */
  propTypes: {
    board: React.PropTypes.instanceOf(Connect4.Board)
  },

  /**
   * Function called when each cell is clicked, adding piece and re-render UI
   * @param  {Number} columnIndex
   * @param  {String} piece
   * @return {Void}
   */
  handleAddPiece(columnIndex, piece) {

    // Add piece
    this.props.board.addPiece(columnIndex, piece);

    // Force UI update
    this.forceUpdate();

  },

  /**
   * Render all the things
   * @return {JSX}
   */
  render() {

    return (
      <div className="connect4-grid">
        {this.props.board.grid.map((column, x) => {

          return (
            <div className="connect4-column">
              {column.map((row, y) => {

                let classes = classNames({
                  'connect4-row': true,
                  'connect4-row--red': (row === 'red'),
                  'connect4-row--blue': (row === 'blue')
                });

                return (
                  <button
                    className={classes}
                    onClick={this.handleAddPiece.bind(this, x, this.props.board.nextPlayer)}>
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
