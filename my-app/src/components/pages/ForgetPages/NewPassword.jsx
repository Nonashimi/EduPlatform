import React, { useState } from 'react'
import MyInput from '../../UI/MyInput/MyInput'
import MyButton from '../../UI/MyButton/MyButton'

const NewPassword = () => {
    const {func, setFunc} = useState({password1: "", password2: ""});
  return (
    <div className='container' >
        <div className="forgot_inner">
            <div className="forgot_inner_text">
                <h2>New Password</h2>
            </div>
            <div className="forgot_inner_btns">
                <div className="forgot_inner_message">
                Please create a new password that you don’t use on any other site.
                </div>
            <MyInput placeHolder = "New Password" type = "password" style = {{width:"40%"}} value = {func.password1} onChange = {(e) => setFunc({...func, password1: e.target.value})}></MyInput>
            <MyInput placeHolder = "Confirm Your Password" type = "password" style = {{width:"40%"}} value = {func.password2} onChange = {(e) => setFunc({...func, password2: e.target.value})}></MyInput>
            <MyButton style = {{width:"40%" , padding: "15px "}}>Change</MyButton>
            </div> 
        </div>
    </div>
  )
}

export default NewPassword