import React from 'react'
import edit from "../../assest/icons8-edit-50.png"
import classes from "./Edit.module.css"
const Edit = () => {
  return (
        <div className={classes.edit}>
            <div className={classes.edit_text}>Edit</div>
            <img src={edit} alt="" />
        </div>
  )
}

export default Edit