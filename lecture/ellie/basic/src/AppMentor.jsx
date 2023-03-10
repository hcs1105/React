import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '창수',
    title: '주니어 개발자',
    mentor: {
      name : 'James',
      title : '시니어 개발자',
      
    }
  });

  const changeMentor = () => {
    const name = prompt('당신의 멘토 이름은 무엇입니까?');
    // setPerson(person => ({...person, mentor:{...person.mentor, name:name}}));
    setPerson(person => ({...person, mentor:{...person.mentor, name}}));
  }

  const changeMentorTitle = () => {
    const title = prompt('당신의 멘토 타이틀은 무엇입니까?');
    setPerson(person => ({...person, mentor:{...person.mentor, title}}));
  }

  return (
    <div>
      <h1>{person.name}는 {person.title}</h1>
      <p>{person.name}의 멘토는 {person.mentor.title} {person.mentor.name}입니다.</p>
      <button type="button" onClick={changeMentor}>멘토 이름 바꾸기</button>
      <button type="button" onClick={changeMentorTitle}>멘토 타이틀 바꾸기</button>
    </div>
  );
}