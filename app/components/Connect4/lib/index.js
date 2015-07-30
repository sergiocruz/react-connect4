// Importing modules that executes the matching for us
import matches from './matches';
import config from './config';


export default {
  matches,
  getEmptyGrid,
  config
};

/**
 * Returns an empty grid for game start
 * @return {Array}
 */
function getEmptyGrid() {

  /**
   * Multimentional array representing the Connect4 grid
   * @type {Array}
   */
  return [
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ]
  ];
}


// Matches?
console.log('matches?', matches(getEmptyGrid()));
