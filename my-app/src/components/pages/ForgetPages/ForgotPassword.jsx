import React, { useState } from 'react'
import MyInput from '../../UI/MyInput/MyInput'
import MyButton from '../../UI/MyButton/MyButton'
import "../../../style/Forgot.css";
const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  return (
    <div className='container' style={{height: "70vh"}}>
        <div className="forgot_inner">
            <div className="forgot_inner_text">
                <h2>Forgot Password</h2>
                <div className="">Enter your email address</div>
            </div>
            <div className="forgot_inner_btns">
            <MyInput placeHolder = "Email" style = {{width:"40%"}} value = {email} onChange = {(e) => setEmail(e.target.value)}></MyInput>
            <MyButton style = {{width:"40%" , padding: "15px "}}>Continue</MyButton>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword