'use strict';

import React from 'react';
import Connect4 from './components/connect4/connect4';

let App = React.createClass({

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <Connect4 />
      </div>
    );
  }

});

React.render(<App />, document.body);
