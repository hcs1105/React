/* npm으로 설치한 React와 React-DOM을 불러옴 */
const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay');

ReactDom.render(<WordRelay />, document.querySelector('#root'));