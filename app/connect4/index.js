// Importing modules that executes the matching for us
import matches from './matches';

/**
 * Multimentional array representing the Connect4 grid
 * @type {Array}
 */
let grid = [
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
];

// Matches?
console.log('matches?', matches(grid));
