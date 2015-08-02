jest.dontMock('../../components/App');

import React from 'react/addons';
import App from '../../components/App';

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
