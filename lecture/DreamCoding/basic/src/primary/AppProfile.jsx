import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert('버튼이 클릭됨');
  }
  return (
    <>
      <button type='button' onClick={handleClick}>버튼</button>
      <Avartar image='https://avatars.githubusercontent.com/u/8123489?v=4' newIcon={true} />
      <Profile image='https://avatars.githubusercontent.com/u/8123489?v=4' name='한창수' job='프론트엔드 개발자' newIcon={true} />
      <Profile image='https://avatars.githubusercontent.com/u/8123489?v=4' name='이창수' job='백엔드 개발자' />
      <Profile image='https://avatars.githubusercontent.com/u/8123489?v=4' name='삼창수' job='프론트엔드 개발자' />
    </>
  );
}

export default AppProfile;
