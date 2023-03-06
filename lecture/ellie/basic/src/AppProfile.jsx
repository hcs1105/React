import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile image='https://avatars.githubusercontent.com/u/8123489?v=4' name='한창수' job='프론트엔드 개발자' newIcon='true' />
      <Profile image='https://avatars.githubusercontent.com/u/8123489?v=4' name='이창수' job='백엔드 개발자' />
      <Profile image='https://avatars.githubusercontent.com/u/8123489?v=4' name='삼창수' job='프론트엔드 개발자' />
    </>
  );
}

export default AppProfile;
