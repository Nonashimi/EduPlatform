import React, { useState } from 'react'
import "./ScrollBlock.css";
const ScrollBlock = ({isActive, setIsActive, notFirstClick, setNotFirstClick}) => {
    const clickSignIn = () =>{
        setIsActive(false);
        setNotFirstClick(true);
    }
    const clickSignUp = () =>{
        setIsActive(true);
        setNotFirstClick(true);

    }
  return (
    <div className={`toggle_block ${isActive?'toggle_block_active':''}`}>
        <div className={`toggle ${isActive?'toggle_active':''}`}>
            <div className={`toggle_panel toggle_left ${isActive?'toggle_left_active':''}`}>
                <div className="start_message">
                    <div className="start_title">
                        Welcome Back!
                    </div>
                    <div className="start_text">
                        Enter your personal details to use all of the features
                    </div>
                    <button className='sign_button' onClick={() => clickSignIn()}>Sign In</button>
                </div>
            </div>
            <div className={`toggle_panel toggle_right ${isActive?'toggle_right_active':''}`}>
                <div className="start_message">
                    <div className="start_title">
                        Hello, Friend!
                    </div>
                    <div className="start_text">
                        Register with your personal details to use all of the features                    
                    </div>
                    <button className='sign_button' onClick={() => clickSignUp()}>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ScrollBlock