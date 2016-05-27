jest.dontMock('../../../../../app/components/connect-4/lib/matches/horizontal');

import isHorizontal from '../../../../../app/components/connect-4/lib/matches/horizontal';

describe('isHorizontal', () => {

  it('should match first horizontal row', () => {

    var grid = [
      [ 0, 0, 0, 0, 2, 1],
      [ 0, 0, 0, 0, 2, 1],
      [ 0, 0, 0, 0, 2, 1],
      [ 0, 0, 0, 0, 0, 1 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isHorizontal(grid)).toBe(true);
  });


  it('should match second horizontal row', () => {

    var grid = [
      [ 0, 0, 0, 0, 1, 1 ],
      [ 0, 0, 0, 0, 1, 2 ],
      [ 0, 0, 0, 0, 1, 1 ],
      [ 0, 0, 0, 0, 1, 2 ],
      [ 0, 0, 0, 0, 2, 1 ],
      [ 0, 0, 0, 0, 2, 2 ],
      [ 0, 0, 0, 0, 2, 1 ]
    ];

    expect(isHorizontal(grid)).toBe(true);
  });

  it('empty grid should not match horizontally', () => {

    var grid = [
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ],
      [ 0, 0, 0, 0, 0, 0 ]
    ];

    expect(isHorizontal(grid)).toBe(false);
  });

  it('should not match horizontally', () => {

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

    expect(isHorizontal(grid)).toBe(false);
 });

 it('should not match horizontally for continuous piece in different rows', () => {

   // another buggy grid
   var grid = [
     [ 0, 0, 0, 0, 2, 1 ],
     [ 0, 0, 0, 0, 2, 1 ],
     [ 0, 0, 0, 0, 2, 1 ],
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 0, 1 ],
     [ 0, 0, 0, 0, 0, 0 ],
     [ 0, 0, 0, 0, 1, 2 ]
   ];

   expect(isHorizontal(grid)).toBe(false);
 });


});
