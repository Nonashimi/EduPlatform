import React from 'react'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import "./SignUp.css";
const SignUp = ({isActive, notFirstClick}) => {
  return (
    <div className={`block sign_up ${isActive?'sign_up_active': notFirstClick?'sign_up_not':""}`}>
        <div className='title'>Create Account</div>
            <div className='message'>field this blank</div>
            <MyInput placeHolder = "username"></MyInput>
            <MyInput placeHolder = "Email"></MyInput>
            <MyInput placeHolder = "password" type = "password"></MyInput>
            <div className='buttons'>
              <MyButton>Sign Up</MyButton>
            </div>
    </div>
  )
}

export default SignUp