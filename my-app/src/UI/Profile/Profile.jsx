import React from 'react'
import classes from "./profileView.module.css"
import Edit from '../Edit/Edit'
const Profile = () => {
  return (
        <div className={classes.profile_view}>
            <div className={classes.profile_view_data}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className={classes.profile_img} alt="" />
                <div className={classes.profile_view_texts}>
                    <div className={classes.profile_view_ttitle}>Name Surname</div>
                    <div className={classes.profile_view_ttext}>sacdsv</div>
                    <div className={classes.profile_view_stext}>sacdsv</div>
                </div>
            </div>
            <Edit/>
        </div>
        
  )
}

export default Profile