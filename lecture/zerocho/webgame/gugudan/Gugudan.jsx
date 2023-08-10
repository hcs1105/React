/* npm으로 설치한 React을 불러옴 */
const React = require('react');
const { useState, useRef } = React; // 비구조화 할당 문법(구조 분해 할당 문법) 사용

const Gugudan = () => { 
  const [firstNum, setFirstNum] = useState(Math.ceil(Math.random() * 9)); 
  const [secondNum, setSecondNum] = useState(Math.ceil(Math.random() * 9)); 
  const [value, setValue] = useState(''); 
  const [result, setResult] = useState(''); 
  const inputRef = useRef(null);

  const onChangeInput = e => {
    setValue(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if(parseInt(value) === firstNum * secondNum){
      setResult('정답 : ' + value);
      setFirstNum(Math.ceil(Math.random() * 9));
      setSecondNum(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();   
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  return (
    <>
      <p>{firstNum} 곱하기 {secondNum}은?</p>  
      <form onSubmit = {onSubmitForm}>
        <input type="number" ref={inputRef} value={value} onChange={onChangeInput} />
        <button type="submit">입력</button>  
      </form>
      <p>{result}</p>
    </>
  );
}

module.exports = Gugudan;