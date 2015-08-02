export default isDiagonal;

// General rules
const matchReq = 4;
const numCols = 7;
const numRows = 6;

/**
 * Are there any diagonal matches?
 * @param  {Array}  grid Multidmentional array representing our grid
 * @return {Boolean}
 */
function isDiagonal(grid) {
  return isTopRight(grid) || isTopLeft(grid);
}

/**
 * Found in top right?
 * @param  {Array}  grid
 *
 * @return {Boolean}
 */
function isTopLeft(grid) {

  let found;
  let foundPiece;
  let col;

  // Here, we take successive diagonals, defined by the location of their
  // "base", meaning the column where they meet the ground.
  // The initial baseCol is a negative number, representing that the diagonal
  // starts off the board. These diagonals intersect the board, nonetheless.
  for (
    let baseCol = matchReq - numRows;
    baseCol < numCols - (matchReq - 1);
    baseCol++
  ) {

    found = 0;
    foundPiece = 0;
    col = baseCol - 1; // Subtracting 1 to compensate for incrementing col at
                       // the beginning of the loop

    // Here we work our way *UP* the current diagonal
    for (let row = 0; row < numRows; row++) {
      col++;

      // Ensure that the given column and row are on the board
      if (col >= 0 && col < numCols && row < numRows) {

        let piece = grid[col][row];

        if(!piece) {
          found = 0;
        }

        if (!!piece && (piece === foundPiece || !foundPiece) && (++found) === matchReq) {
          return true;
        }

        foundPiece = piece;

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
function isTopRight(grid) {

  let found;
  let foundPiece;
  let col;

  // Here, we take successive diagonals, defined by the location of their "base",
  // meaning the column where they meet the ground.
  // The initial baseCol is a negative number, representing that the diagonal starts off
  // the board. These diagonals intersect the board, nonetheless.
  for (
    let baseCol = matchReq - numRows;
    baseCol < numCols - (matchReq - 1);
    baseCol++
  ) {

      found = 0;
      foundPiece = 0;
      col = baseCol - 1; // Subtracting 1 to compensate for incrementing col at
                         // the beginning of the loop

      // Here we work our way *DOWN* the current diagonal
      for (let row = numRows - 1; row >= 0; row--) {
        col++;

        // Ensure that the given column and row are on the board
        if (col >= 0 && col < numCols && row < numRows) {

          let piece = grid[col][row];

          if(!piece) {
            found = 0;
          }

          if (!!piece && (piece === foundPiece || !foundPiece) && (++found) === matchReq) {
            return true;
          }

          foundPiece = piece;

      }
    }
  }

  return false;
}
