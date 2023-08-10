/** 
 * npm으로 설치한 React을 불러옴.
 */
const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('한창수');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');    
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value);
  };

  return ( 
    <>
      <div>{word}</div>
      <form method="post" onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        <input type="text" id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
        <button type="submit">입력</button>
        <div>{result}</div>
      </form>
    </>
  );
};

module.exports = WordRelay;