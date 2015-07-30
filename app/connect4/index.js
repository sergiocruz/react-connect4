'use strict';

// Importing modules that executes the matching for us
import isHorizontal from './matches/horizontal';
import isVertical from './matches/vertical';
import isDiagonal from './matches/diagonal';

/**
 * Multimentional array representing the Connect4 grid
 * @type {Array}
 */
let grid = [
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 0, 0 ],
  [ 0, 0, 1, 0, 0, 0 ],
  [ 0, 1, 0, 0, 0, 0 ],
  [ 1, 0, 0, 0, 0, 0 ]
];

console.log('Vertical?', isVertical(grid));
console.log('Horizontal?', isHorizontal(grid));
console.log('Diagonal?', isDiagonal(grid));
