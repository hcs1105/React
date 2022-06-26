import React, { Component } from 'react';
import Tries from './Tries';

function getNumbers(){ // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];

  for(let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random()*(9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

class NumberBaseball extends Component {
  state = {
    result : '',
    value : '',
    answer : getNumbers(), // ex) [1, 3, 5, 7]
    tries : []
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.value === this.state.answer.join('')) { // 입력한 숫자가 정답인 경우
      this.setState({
        result : '홈런',
        tries : [...this.state.tries, { try : this.setState.value, result : '홈런'}]
      });
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if(this.state.tries.length >= 9) {

      }
    }
    console.log(this.state.value);
  };

  onChangeInput = (e) => {
    console.log(this);
    console.log(this.state.answer);
    this.setState({
      value : e.target.value
    });
  };

  fruits = [
    {fruit : '사과', taste : '맛있다'}, 
    {fruit : '배', taste : '좋다'}, 
    {fruit : '복숭아', taste : '괜찮다'}, 
    {fruit : '딸기', taste : '깔끔하다'}, 
    {fruit : '바나나', taste : '시원하다'}
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type="number" value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.fruits.map((v, i) => {
            return (
              <Tries key={v.fruit + v.taste} value={v} index={i} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball; // import NumberBaseball