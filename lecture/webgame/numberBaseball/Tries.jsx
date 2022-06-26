import React, { Component } from 'react';

class Tries extends Component {
  render() {
    return (
      <li>
        <strong>{this.props.value.fruit}</strong> - {this.props.index}
      </li>
    );
  }
}

export default Tries; // import Tries