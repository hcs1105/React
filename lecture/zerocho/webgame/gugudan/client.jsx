/* npm으로 설치한 React와 React-DOM을 불러옴 */
const React = require('react');
const ReactDom = require('react-dom');
const Gugudan = require('./Gugudan');

ReactDom.render(<Gugudan />, document.querySelector('#root'));