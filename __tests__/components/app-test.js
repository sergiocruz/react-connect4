jest.dontMock('../../app/components/app');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import App from '../../app/components/app';

describe('App', () => {

  it('renders with correct text', () => {

    let app = ReactTestUtils.renderIntoDocument(
      <App />
    );

    let appNode = ReactDOM.findDOMNode(app);

    expect(
      appNode.querySelector('h1').textContent
    ).toEqual('Connect Four');

  });

});
