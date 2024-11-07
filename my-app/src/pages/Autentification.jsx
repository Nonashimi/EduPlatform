import React, { useState } from 'react'
import classes from "../style/fon.module.css"
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SIgnUp/SignUp';
import ScrollBlock from '../UI/ScrollBlock/ScrollBlock';
const Autentification = () => {
    const [isActive, setIsActive] = useState(false);
    const [notFirstClick, setNotFirstClick] = useState(false);
  return (
    <div className={classes.fon}>
      <div className = {`container`}>
        <div className='blocks'>
          <div className='Sign'>
          <SignIn isActive={isActive}/>
          <SignUp isActive={isActive} notFirstClick={notFirstClick}/>
          </div>
          <ScrollBlock isActive={isActive} setIsActive={setIsActive} notFirstClick = {notFirstClick} setNotFirstClick = {setNotFirstClick}/>
        </div>
      </div>
    </div>
  )
}

export default Autentification