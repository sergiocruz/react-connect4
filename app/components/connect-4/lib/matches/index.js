export default Matches;

import isHorizontal from './horizontal';
import isVertical from './vertical';
import isDiagonal from './diagonal';

/**
 * Does this grid contain any matches?
 * @param {Array} grid    6x7 muldimentional array containing our grid
 */
function Matches(grid) {
  return isHorizontal(grid) || isVertical(grid) || isDiagonal(grid);
}
