import React, { useState } from 'react'
import classes from "./SwitchFon.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { clickSwitch } from '../../toolkitRedux/toolkitReducer';
const SwitchFon = () => {
  const isNight = useSelector(state => state.night.isNight);
  const dispatch = useDispatch();
  return (
    <div className={classes.switch} onClick={() => dispatch(clickSwitch())}>
        <div className={`${classes.circle} ${isNight?classes.transformed:''}`}></div>
    </div>
  )
}

export default SwitchFon