export default isDiagonal;

/**
 * Are there any diagonal matches?
 * @param  {Array}  grid Multidmentional array representing our grid
 * @return {Boolean}
 */
function isDiagonal(grid) {

  if (isTopRight(grid)) {
    return true;
  }

  return isTopLeft(grid);
}

/**
 * Found in top right?
 * @param  {Array}  grid
 *
 * @return {Boolean}
 */
function isTopRight(grid) {
  var numCols = 7,
      numRows = 6,
      maxDiagSize = Math.min(numCols, numRows),
      numDiags = numCols + numRows - 1,
      found,
      foundPiece,
      matchReq = 4; // Because Connect 4

    // Here, we take successive diagonals, defined by the location of their "base",
    // meaning the column where they meet the ground.
    // The initial baseCol is a negative number, representing that the diagonal starts off
    // the board. These diagonals intersect the board, nonetheless.
    for(var baseCol=1-numRows + (matchReq-1); baseCol<numCols - (matchReq - 1); baseCol++) {

    found = 0;
    foundPiece = 0;

    // Here we work our way up the current diagonal
    for(var row=0; row<numRows; row++) {

      // For each row, we find the // column that the diagonal runs through
      col = baseCol + row;

      // Ensure that the given column and row are on the board
      if(col >= 0 && col < numCols && row >= 0 && row < numRows) {
        let piece = grid[col][row]
        if(!foundPiece) {
          foundPiece = piece;
        }
        if(piece !== foundPiece) {
          break;
        }
        if((++found) === 4) {
          return true;
        }
      }

    }
  }
  return false;
}


/**
 * Are there any diagonal matches from top left?
 * @param  {Array}  grid
 *
 * @return {Boolean}
 */
function isTopLeft(grid) {

  let found = 0;
  let foundPiece = 0;

  for (let x = 6; x >= 0; x--) {
    for (let y = 0; y < 6; y++) {

      // Reset
      found = 0;
      foundPiece = 0;

      for (let z = 0; z < 4; z++) {

        // Undefined or zero? Break loop (impossible match)
        if (!(grid[x - z] && grid[x - z][y + z])) {
          break;
        }

        let piece = grid[x - z][y + z];

        // If no pieces were previously found, then set the current piece as it
        if (!foundPiece) {
          foundPiece = piece;
        }

        // If piece is not equal to foundPiece, break whole flow
        if (piece !== foundPiece) {
          break;
        }

        // Found 4?
        if ((++found) === 4) {
          return true;
        }
      }
    }
  }

  return false;
}
