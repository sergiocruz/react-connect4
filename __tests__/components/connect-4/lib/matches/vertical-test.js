jest.dontMock('../../../../../app/components/connect-4/lib/matches/vertical');

import isVertical from '../../../../../app/components/connect-4/lib/matches/vertical';

describe('isVertical', () => {

  it('should match first vertical row', () => {

    var grid = [
      [ 0, 0, 1, 1, 1, 1],
      [ 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isVertical(grid)).toBe(true);
  });


  it('should match last vertical row', () => {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 1, 1, 1, 1 ]
    ];

    expect(isVertical(grid)).toBe(true);
  });


  it('empty grid should not match vertically', () => {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isVertical(grid)).toBe(false);
  });

  it('should not match vertically', () => {

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

    expect(isVertical(grid)).toBe(false);
  });

  it('should not match vertically for continuous piece in different columns', () => {

    // another buggy grid
    var grid = [
      [ 0, 2, 2, 1, 1, 1 ],
      [ 1, 1, 1, 2, 2, 2 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isVertical(grid)).toBe(false);
  });


});
