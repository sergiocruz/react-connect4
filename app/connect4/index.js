'use strict';

export default {};

import isHorizontal from './matches/horizontal';
import isVertical from './matches/vertical';

// This is a Connect 4 game, so our matches will always be 4
const matchesNum = 4;

/**
 * Our multimentional array representing the grid
 * @type {Array}
 */
let grid = [
  [ 1, 1, 1, 1, 1, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 0, 0, 1, 0, 0, 0 ],
  [ 0, 1, 0, 1, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
];

console.log('Vertical?', isVertical(grid));
console.log('Horizontal?', isHorizontal(grid));
