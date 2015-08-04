// jest.dontMock('../../../app/components/connect-4/board');
// jest.dontMock('../../../app/components/connect-4/lib');

// import React from 'react/addons';
// import Board from '../../../app/components/connect-4/board';
// import Connect4 from '../../../app/components/connect-4/lib';


// const TestUtils = React.addons.TestUtils;
// let board = new Connect4.Board();
// let boardMock = jasmine.createSpyObj('boardMock', ['handleAddPiece']);


// describe('Cell', () => {

//   let cell;
//   let nextPlayer;

//   beforeEach(() => {

//     // Finds first cell in the board
//     cell = boardNode.children[0].children[0];
//     spyOn(board, 'addPiece').andCallThrough();

//     // First cell from the first column in the board
//     nextPlayer = board.nextPlayer;

//   });


//   it('should call board.addPiece', () => {

//     TestUtils.Simulate.click(cell);

//     // Should have been called with first colum
//     expect(board.addPiece).toHaveBeenCalledWith(0, nextPlayer);
//     expect(boardMock.handleGameRefresh).toHaveBeenCalled();

//   });

//   it('should have a different player', () => {
//     TestUtils.Simulate.click(cell);
//     expect(board.nextPlayer !== nextPlayer).toBeTruthy();
//   });

//   it('should not call addPiece when board is inactive', () => {

//     board.isActive = false;

//     TestUtils.Simulate.click(cell);

//     expect(board.addPiece).not.toHaveBeenCalled();

//     board.isActive = true;
//   });

// });
