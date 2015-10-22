jest.dontMock('../../../app/components/connect-4/board');
jest.dontMock('../../../app/components/connect-4/lib');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';

import Board from '../../../app/components/connect-4/board';
import Connect4 from '../../../app/components/connect-4/lib';


let board = new Connect4.Board();
let boardMock = jasmine.createSpyObj('boardMock', ['handleAddPiece']);

describe('Board', () => {

  let boardComponent;
  let boardNode;

  beforeEach(() => {

    boardComponent = ReactTestUtils.renderIntoDocument(
      <Board board={board} addPiece={boardMock.handleAddPiece} />
    );

    boardNode = ReactDOM.findDOMNode(boardComponent);

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
