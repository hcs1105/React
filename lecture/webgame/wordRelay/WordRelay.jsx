/** 
 * npm으로 설치한 React을 불러옴.
 */
const React = require('react');
const { Component } = React;

class WordRelay extends Component{
  state = {
    word : '한창수',
    value : '',
    result : '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result : '딩동댕',
        word : this.state.value,
        value : ''
      });
      this.input.focus();
    } else {
      this.setState({
        result : '땡',
        value : '',
      });
      this.input.focus();
    }
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  onChangeInput = (e) => {
    this.setState({
      value : e.currentTarget.value
    });
  }

  render() {
    return ( 
      <>
        <div>{this.state.word}</div>
        <form method="post" onSubmit={this.onSubmitForm}>
          {/* <input type="text" ref={this.onRefInput} defaultValue={this.state.value} /> */}
          <input type="text" ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button type="submit">입력</button>
          <div>{this.state.result}</div>
        </form>
      </>
    );
  }
}

module.exports = WordRelay;