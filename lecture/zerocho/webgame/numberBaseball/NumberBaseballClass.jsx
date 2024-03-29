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

class NumberBaseballClass extends Component {
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
      alert('게임을 다시 시작합니다.');
      this.setState({
        value : '',
        answer : getNumbers(),
        tries : []
      });
    } else { // 입력한 숫자가 틀린 경우
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;

      if(this.state.tries.length >= 10) { // 10번 이상 틀리면
        this.setState({
          result : `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}입니다.`
        });
        alert('게임을 다시 시작합니다.');
        this.setState({
          value : '',
          answer : getNumbers(),
          tries : []
        });
      } else {
        for(let i = 0; i < 4; i++) {
          if(answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if(this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState({
          tries : [...this.state.tries, { try : this.setState.value, result : `${strike} 스트라이크, ${ball}볼입니다.`}],
          value : ''
        });
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

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type="number" value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도 : {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return (
              <Tries key={`${i+1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseballClass; // import NumberBaseballClass