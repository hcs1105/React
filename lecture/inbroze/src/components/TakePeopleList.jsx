import React, { useState } from 'react';

let newId = 0;

export default function TakePeopleList() {
  const [newName, setNewName] = useState('');
  const [personList, setPersonList] = useState([]);

  const addTalkPerson = () => {
    // input 요소의 value 값 초기화
    setNewName('');

    // input 요소의 value 값을 베열에 추가하기
    setPersonList([...personList, 
      {
        id : newId++,
        name : newName,
      }
    ]);
  };

  return (
    <div>
      <h1>떠든 사람:</h1>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button type="button" onClick={addTalkPerson}>추가</button>
      <ul>
        {personList.map((people) => {
          return <li key={people.id}>{people.name}</li>;
        })}
      </ul>
    </div>
  );
}