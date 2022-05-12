/* npm으로 설치한 React을 불러옴 */
const React = require('react');
const { Component } = React;

class WordRelay extends Component{
  state = {
    text : 'Hello! Webpack',
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;