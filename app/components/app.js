import React from 'react';
import Connect4 from './connect-4/connect4';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <Connect4 />
      </div>
    );
  }
}
