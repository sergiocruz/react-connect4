jest.dontMock('../../../app/components/connect4/board');
jest.dontMock('../../../app/components/connect4/lib');

import React from 'react/addons';
import Board from '../../../app/components/connect4/board';
import Connect4 from '../../../app/components/connect4/lib';


const TestUtils = React.addons.TestUtils;
let board = new Connect4.Board();
let boardMock = jasmine.createSpyObj('boardMock', ['handleAddPiece']);

describe('Board', () => {

  let boardComponent;
  let boardNode;

  beforeEach(() => {

    boardComponent = TestUtils.renderIntoDocument(
      <Board board={board} addPiece={boardMock.handleAddPiece} />
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

});
