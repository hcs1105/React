import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
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
  });

  const changeMentor = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');
    setPerson(person => ({
      ...person, 
      mentors: person.mentors.map(mentor => {
        if(mentor.name === prev) {
          return {...mentor, name: current};
        } 
        return mentor;
      })
    }));
  }

  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map(mentor => (
          <li key={mentor.id}>{mentor.name} {mentor.title}</li>
        ))}
      </ul>
      <button type="button" onClick={changeMentor}>멘토 이름 바꾸기</button>
    </div>
  );
}