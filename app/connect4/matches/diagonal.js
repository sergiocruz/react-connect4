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
      matchReq = 4, // Because Connect 4
      col;

    // Here, we take successive diagonals, defined by the location of their "base",
    // meaning the column where they meet the ground.
    // The initial baseCol is a negative number, representing that the diagonal starts off
    // the board. These diagonals intersect the board, nonetheless.
    for(var baseCol=1-numRows + (matchReq-1); baseCol<numCols - (matchReq - 1); baseCol++) {

      found = 0;
      foundPiece = 0;

      col = baseCol;

      // Here we work our way up the current diagonal
      for(var row=0; row<numRows; row++) {

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
        ++col; // increase column for next cell

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
  var numCols = 7,
      numRows = 6,
      maxDiagSize = Math.min(numCols, numRows),
      numDiags = numCols + numRows - 1,
      found,
      foundPiece,
      matchReq = 4, // Because Connect 4
      col;

    // Here, we take successive diagonals, defined by the location of their "base",
    // meaning the column where they meet the ground.
    // The initial baseCol is a negative number, representing that the diagonal starts off
    // the board. These diagonals intersect the board, nonetheless.
    for(var baseCol=1-numRows + (matchReq-1); baseCol<numCols - (matchReq - 1); baseCol++) {

      found = 0;
      foundPiece = 0;

      col = baseCol;

      // Here we work our way *down* the current diagonal
      for(var row=numRows-1; row>=0; row--) {

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
        ++col; // increase column for next cell

      }
  }
  return false;
}
