import React, { Component } from 'react';
import Tries from './Tries';

function getNumbers(){ // 숫자 4개를 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseball extends Component {
  state = {
    result : '',
    value : '',
    answer : getNumbers(),
    tries : []
  };

  onSubmitForm = () => {};

  onChangeInput = () => {};

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
              <Tries value={v} index={i} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball; // import NumberBaseball