import React from 'react'
import edit from "../../assest/icons8-edit-50.png"
import edit_black from "../../assest/icons8-edit-black.png"
import classes from "./Edit.module.css"
import { useSelector } from 'react-redux'
const Edit = () => {
  const isNight = useSelector(state => state.night.isNight);
  return (
        <div className={`${classes.edit} ${!isNight?classes.isWhite:classes.isNight}`}>
            <div className={classes.edit_text}>Edit</div>
            <img src={!isNight?edit_black:edit} alt="" />
        </div>
  )
}

export default Edit