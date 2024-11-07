import React from 'react'
import classes from "../../style/sideBar.module.css"
import notif from "../../assest/icons8-notification-50.png"
import { useSelector } from 'react-redux';
const SideBar = () => {
    const images = [
        {img: notif},
        {img: notif},
        {img: notif},
        {img: notif},
        {img: notif}
    ];
    const isNight = useSelector(state => state.night.isNight);
  return (
    <div className={`${classes.sideBar} ${isNight?classes.sideBar_black_bac:classes.sideBar_default_bac}`}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <div className={classes.logo_inner}>Logo</div>
            </div>
            <div className={classes.nav}>
                {images.map(image => 
                    <li className={classes.nav_li}>
                        <img src={image.img} alt="" />
                    </li>
                )}
            </div>
        </div>
    </div>
  )
}

export default SideBar