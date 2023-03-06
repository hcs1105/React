import logo from './logo.svg';
import './App.css';

function AppProfile() {
  const name = 'hcs1105';
  const itemList = ['우유', '딸기', '바나나'];

  return (
    <>
      <h1>{`Hello! ${name}`}</h1>
      <h2>Hi!</h2>
      <p>{name}</p>
      <ul>
        {itemList.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default AppProfile;
