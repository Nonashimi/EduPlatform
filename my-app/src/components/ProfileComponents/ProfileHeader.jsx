import React from 'react'
import classes from "../../style/ProfileHeader.module.css"
import MySearch from '../../UI/MySearch/MySearch'
import SwitchFon from '../../UI/SwitchFon/SwitchFon'
import sun_active from "../../assest/icons8-sun-50.png"
import sun from "../../assest/icons8-солнце-50.png"
import moon_active from "../../assest/icons8-moon_active-50.png"
import moon from "../../assest/icons8-moon-50.png";
import notification from "../../assest/icons8-notification-50.png"
import { useDispatch, useSelector } from 'react-redux'
import { clickMoon, clickSun } from '../../toolkitRedux/toolkitReducer'
const ProfileHeader = () => {
  const isNight = useSelector(state => state.night.isNight);
  const dispatch = useDispatch();
  return (
    <header className={`${classes.header} ${!isNight?classes.header_default_bac:classes.header_black_bac}`}>
            <div className={classes.logo}>
            </div>
            <div className={classes.header_element}>
              <div className={classes.header_search_el}>
                <MySearch placeholder = "Search..."/>
              </div>
              <ul className={classes.function}>
                <li className={classes.function_li} onClick={() => dispatch(clickSun())}>
                  <img src={isNight?sun:sun_active} alt="" />
                </li>
                <li className={classes.function_li}>
                  <SwitchFon/>
                </li>
                <li className={classes.function_li} onClick={() => dispatch(clickMoon())}>
                  <img src={isNight?moon_active:moon} alt="" />
                </li>
              </ul>
            </div>
            <div className={classes.notification}>
                <img src={notification} alt="" />
            </div>
        </header>
  )
}

export default ProfileHeader