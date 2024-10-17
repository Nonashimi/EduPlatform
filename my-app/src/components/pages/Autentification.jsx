import React, { useState } from 'react'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SIgnUp/SignUp'
import ScrollBlock from '../UI/ScrollBlock/ScrollBlock'

const Autentification = () => {
    const [isActive, setIsActive] = useState(false);
    const [notFirstClick, setNotFirstClick] = useState(false);
  return (
    <div className = "container">
        <div className='blocks'>
          <div className='Sign'>
          <SignIn isActive={isActive}/>
          <SignUp isActive={isActive} notFirstClick={notFirstClick}/>
          </div>
          <ScrollBlock isActive={isActive} setIsActive={setIsActive} notFirstClick = {notFirstClick} setNotFirstClick = {setNotFirstClick}/>
        </div>
      </div>
  )
}

export default Autentification