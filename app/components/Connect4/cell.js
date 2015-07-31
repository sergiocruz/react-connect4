import React from 'react';

export default React.createClass({

  propTypes: {
    piece: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <button
        className="connect4-row"
        onClick={this.handleAddPiece.bind(
          this,
          this.props.column,
          this.props.piece
        )}>
      </button>
    );
  }
});
