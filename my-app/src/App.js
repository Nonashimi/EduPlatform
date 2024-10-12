import { useState } from 'react';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SIgnUp/SignUp';
import ScrollBlock from './components/UI/ScrollBlock/ScrollBlock';
import './style/App.css';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [notFirstClick, setNotFirstClick] = useState(false);
  return (
    <div className="App">
      <div className = "container">
        <div className='blocks'>
          <div className='Sign'>
          <SignIn isActive={isActive}/>
          <SignUp isActive={isActive} notFirstClick={notFirstClick}/>
          </div>
          <ScrollBlock isActive={isActive} setIsActive={setIsActive} notFirstClick = {notFirstClick} setNotFirstClick = {setNotFirstClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
