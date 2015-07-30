'use strict';

export default isHorizontal;

/**
 * Are there any matches horizontally?
 * @param {Array} grid Multimentional array containing the connect4 grid
 * 
 * @return {Boolean}
 */
function isHorizontal(grid) {

  // Number of rows
  const rowsNum = 6;
  const columnsNum = 7;

  // which piece was found and how many
  let found = 0;
  let foundPiece = 0;

  for (let i = 0; i < rowsNum; i++) {
    for (let j = 0; j < columnsNum; j++) {

      // Current piece in this row
      let piece = grid[j][i];

      // Reset things if piece is 0
      if (piece === 0) {
        found = 0;
        foundPiece = 0;
        continue;
      }
      
      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        continue;
      }

      // Increase number of found pieces
      found++;

      // More than 4 found pieces in a piece?
      if (found >= 4) {
        return true;
      }
    }
  }

  // nothing was found in the same row
  return false;
}
