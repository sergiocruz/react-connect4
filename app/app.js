'use strict';

import React from 'react';
import Connect4 from './connect4';

let App = React.createClass({

  render: () => {
    return (
      <h1>Hello World</h1>
    );
  }

});

React.render(<App />, document.body);
