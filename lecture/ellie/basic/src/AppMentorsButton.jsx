import React, { useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentors() {
  const initialPerson = {
    name: '창수',
    title: '주니어 개발자',
    mentors: [{
      id : 1,
      name : 'James',
      title : '시니어 개발자',
      
    }, 
    {
      id : 2,
      name : 'Steve Jobs',
      title : '시니어 개발자',
    }]
  }
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const changeMentorName = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    dispatch({type : 'updated', prev, current});
  };

  const addMentorName = () => {
    const name = prompt('멘토의 이름은?');
    const title = prompt('멘토의 직함은?');

    dispatch({type : 'added', name, title});
  };

  const deleteMentorName = () => {
    const name = prompt('누구를 삭제하고 싶은가요?');

    dispatch({type : 'deleted', name});
  };

  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map(mentor => (
          <li key={mentor.name}>{mentor.name} {mentor.title}</li>
        ))}
      </ul>
      <Button onClick={changeMentorName} text="멘토 이름 바꾸기" />
      <Button onClick={addMentorName} text="멘토 추가하기" />
      <Button onClick={deleteMentorName} text="멘토 삭제하기" />
    </div>
  );
}

function Button({ onClick, text }) {
  console.log('Button', text, 're-rendering');

  function calculateSomething() {
    for(let i = 0; i < 10; i++){
      console.log('😀');
    }
    return 10;
  }

  // const result = calculateSomething();
  const result = useMemo(() => calculateSomething(), []);

  return (
    <button 
      type="button"
      onClick={onClick}
      style={{
        margin:'0.4rem',
        borderRadius:'20px',
        backgroundColor:'#000',
        color:'#fff',
      }}>
        {text} ${result}
    </button>
  );
}