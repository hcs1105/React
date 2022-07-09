import React, { Component } from 'react';

class Tries extends Component {
  render() {
    return (
      <li>
        {/* <strong>{this.props.value.fruit}</strong> - {this.props.index}</strong> */}
        <div>{this.props.tryInfo.try}</div>
        <div>{this.props.tryInfo.result}</div>
      </li>
    );
  }
}

export default Tries; // import Tries