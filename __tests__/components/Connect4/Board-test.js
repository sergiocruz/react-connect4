jest.dontMock('../../../app/components/Connect4/Board');
jest.dontMock('../../../app/components/Connect4/lib');

import React from 'react/addons';
import Board from '../../../app/components/Connect4/Board';
import Connect4 from '../../../app/components/Connect4/lib';


const TestUtils = React.addons.TestUtils;
let board = new Connect4.Board();
let boardMock = jasmine.createSpyObj('boardMock', ['handleGameRefresh']);

describe('Board', () => {

  let boardComponent;
  let boardNode;

  beforeEach(() => {

    boardComponent = TestUtils.renderIntoDocument(
      <Board board={board} refresh={boardMock.handleGameRefresh} />
    );

    boardNode = React.findDOMNode(boardComponent);

  });

  it('renders correct number of columns', () => {
    let columns = boardNode.querySelectorAll('.connect4-column');
    expect(columns.length).toEqual(Connect4.config.columns);
  });


  it('renders correct number of cells', () => {

    let column = boardNode.querySelector('.connect4-column');
    expect(column).toBeTruthy();

    let cells = column.querySelectorAll('.connect4-cell');
    expect(cells.length).toEqual(Connect4.config.rows);

  });

  describe('cell click', () => {

    let cell;
    let nextPlayer;

    beforeEach(() => {

      // Finds first cell in the board
      cell = boardNode.children[0].children[0];
      spyOn(board, 'addPiece').andCallThrough();

      // First cell from the first column in the board
      nextPlayer = board.nextPlayer;


    });


    it('should call board.addPiece', () => {

      TestUtils.Simulate.click(cell);

      // Should have been called with first colum
      expect(board.addPiece).toHaveBeenCalledWith(0, nextPlayer);
      expect(boardMock.handleGameRefresh).toHaveBeenCalled();

    });

    it('should have a different player', () => {
      TestUtils.Simulate.click(cell);
      expect(board.nextPlayer !== nextPlayer).toBeTruthy();
    });

    it('should not call addPiece when board is inactive', () => {

      board.isActive = false;

      TestUtils.Simulate.click(cell);

      expect(board.addPiece).not.toHaveBeenCalled();

      board.isActive = true;
    });

  });

});
