jest.dontMock('../../../../../app/components/connect-4/lib/matches/diagonal');

import isDiagonal from '../../../../../app/components/connect-4/lib/matches/diagonal';

describe('isDiagonal', () => {

  it('should match diagonal row top right', () => {

    var grid = [
      [ 0, 0, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 1, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });


  it('should match fourth row top right', () => {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 1, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });

  it('should match first row top left', () => {

    var grid = [
      [ 1, 0, 0, 0, 0, 0 ],
      [ 0, 1, 0, 0, 0, 0 ],
      [ 0, 0, 1, 0, 0, 0 ],
      [ 0, 0, 0, 1, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });

  it('should match last row top left', () => {

    // Grid from a real game
    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 1, 2, 2, 1 ],
      [ 0, 0, 0, 1, 2, 1 ],
      [ 0, 0, 0, 2, 1, 2 ],
      [ 0, 0, 0, 1, 2, 1 ]
    ];

    expect(isDiagonal(grid)).toBe(true);
  });

  it('should not match with empty grid', () => {

    // Grid from a real game
    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isDiagonal(grid)).toBe(false);
  });


  it('should not match with buggy grid', () => {

    // buggy grid from that someone found on Slack
    var grid = [
      [ 0, 2, 1, 1, 2, 1 ],
      [ 0, 0, 2, 2, 1, 2 ],
      [ 0, 0, 1, 1, 2, 1 ],
      [ 0, 0, 2, 2, 1, 2 ],
      [ 0, 0, 1, 1, 2, 1 ],
      [ 0, 0, 2, 2, 1, 2 ],
      [ 0, 0, 0, 1, 2, 1 ]
    ];

    expect(isDiagonal(grid)).toBe(false);
 });


});
