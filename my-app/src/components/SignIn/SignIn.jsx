import React from 'react'
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import "./SignIn.css";
const SignIn = ({isActive}) => {
  return (
    <div className={`block sign_in ${isActive?"sign_in_active":""}`}>
        <div className='title'>Sign In</div>
            <div className='message'>Write your username and password</div>
            <MyInput placeHolder = "username"></MyInput>
            <MyInput placeHolder = "password" type = "password"></MyInput>
            <div className='buttons'>
              <a className='forgot_btn'>Forgot your password?</a>
              <MyButton>Sign in</MyButton>
            </div>
    </div>
  )
}

export default SignIn