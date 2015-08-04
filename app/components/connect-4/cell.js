import React  from 'react';
import classnames from 'classnames';

export default class Cell extends React.Component {

  handleAddPiece() {
    this.props.addPiece(this.props.y, this.props.nextPlayer);
  }

  render() {

    let cellClasses = classnames({
      'connect4-cell': true,
      'connect4-cell--red': (this.props.cell === 'red'),
      'connect4-cell--blue': (this.props.cell === 'blue')
    });

    return (
      <button
        className={cellClasses}
        onClick={this.handleAddPiece.bind(this)}>
      </button>
    );
  }

}

Cell.propTypes = {

  // what position x in the grid I am located in
  x: React.PropTypes.number.isRequired,

  // what position y in the grid I am located in
  y: React.PropTypes.number.isRequired,

  // what value this cell has
  cell: React.PropTypes.string.isRequired,

  // who is the next player?
  nextPlayer: React.PropTypes.string.isRequired,

  // function to add this piece to board
  addPiece: React.PropTypes.func.isRequired
  
};
