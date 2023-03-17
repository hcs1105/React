import React, { useReducer } from 'react';
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

    /*
    setPerson(person => ({
      ...person, 
      mentors: person.mentors.map(mentor => {
        if(mentor.name === prev) {
          return {...mentor, name: current};
        } 
        return mentor;
      })
    }));
    */
  };

  const addMentorName = () => {
    const name = prompt('멘토의 이름은?');
    const title = prompt('멘토의 직함은?');

    dispatch({type : 'added', name, title});

    /*
    setPerson(person => ({
      ...person, 
      mentors : [...person.mentors, {name, title}]
    }));
    */
  };

  const deleteMentorName = () => {
    const name = prompt('누구를 삭제하고 싶은가요?');

    dispatch({type : 'deleted', name});

    /*
    setPerson(person => ({
      ...person, 
      mentors: person.mentors.filter(mentor => mentor.name != name)
    }));
    */
  };

  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map(mentor => (
          <li key={mentor.id}>{mentor.name} {mentor.title}</li>
        ))}
      </ul>
      <button type="button" onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button type="button" onClick={addMentorName}>멘토 추가하기</button>
      <button type="button" onClick={deleteMentorName}>멘토 삭제하기</button>
    </div>
  );
}