import React from 'react';
import Connect4 from './lib'

let grid = Connect4.getEmptyGrid();

export default React.createClass({
  render() {

    return (
      <div class="connect4-grid">
        {grid.map((column, x) => {
          return <div className="connect4-column">
            {column.map((row, y) => {
              return <a className="connect4-row" href="#">{x}, {y}</a>
            })}
          </div>
        })}
      </div>
    );

  }
});
