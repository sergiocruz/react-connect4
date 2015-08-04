jest.dontMock('../../app/components/app');

import React from 'react/addons';
import App from '../../app/components/app';

const TestUtils = React.addons.TestUtils;

describe('App', () => {

  it('renders with correct text', () => {

    let app = TestUtils.renderIntoDocument(
      <App />
    );

    let appNode = React.findDOMNode(app);

    expect(
      appNode.querySelector('h1').textContent
    ).toEqual('Connect Four');

  });

});
