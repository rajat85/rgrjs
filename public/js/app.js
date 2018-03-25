import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return <h1>Hello from webpack?</h1>;
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);
