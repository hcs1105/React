import React, {useState} from 'react';
import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const initialPerson = {
    name: '창수',
    title: '주니어 개발자',
    mentors: [{
      name : 'James',
      title : '시니어 개발자',
      
    }, 
    {
      name : 'Steve Jobs',
      title : '시니어 개발자',
    }]
  }
  const [person, updatePerson] = useImmer(initialPerson);

  const changeMentorName = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    // updatePerson(person => person.name = '새로운 이름!');
    updatePerson(person => {
      const mentor = person.mentors.find(m => m.name === prev);
      mentor.name = current;
    });
  };

  const addMentorName = () => {
    const name = prompt('멘토의 이름은?');
    const title = prompt('멘토의 직함은?');

    updatePerson(person => {
      person.mentors.push({name, title});
    });
  };

  const deleteMentorName = () => {
    const name = prompt('누구를 삭제하고 싶은가요?');
    
    updatePerson(person => {
      const index = person.mentors.findIndex(m => m.name === name);

      person.mentors.splice(index, 1);
    });
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
      <button type="button" onClick={changeMentorName}>멘토 이름 바꾸기</button>
      <button type="button" onClick={addMentorName}>멘토 추가하기</button>
      <button type="button" onClick={deleteMentorName}>멘토 삭제하기</button>
    </div>
  );
}