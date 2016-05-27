export default isVertical;

/**
 * Are there matches found vertically?
 * @param {Array} grid Multimentional array containing the connect4 grid
 *
 * @return {Boolean}
 */
function isVertical(grid) {

  const rowsNum = grid[0].length;
  const columnsNum = grid.length;

  let found = 0;
  let foundPiece = 0;

  for (let x = 0; x < columnsNum; x++) {

    // Reset stats for new column
    found = 0;
    foundPiece = 0;

    for (let y = 0; y < rowsNum; y++) {

      // Current piece in this cell
      let piece = grid[x][y];

      // Go to next cell if current piece is 0
      if (piece === 0) {
        continue;
      }
      
      if (piece !== foundPiece) {
        found = 1;
        foundPiece = piece;
        continue;
      }

      // Increase number of found pieces
      found++;

      // More than 4 found pieces in a column?
      if (found >= 4) {
        return true;
      }
    }
  }

  // No matches found
  return false;
}
