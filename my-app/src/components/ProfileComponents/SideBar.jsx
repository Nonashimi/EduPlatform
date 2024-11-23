import React, { useState } from 'react'
import classes from "../../style/sideBar.module.css"
import home from "../../assest/home icon.png";
import book from "../../assest/book.png";
import profile from "../../assest/prof.png";
import messages from "../../assest/messages.png";
import menu from "../../assest/icons8-menu-50.png";
import logo from "../../assest/graduate-with-cap-svgrepo-com (2) 1.png";
import { useSelector } from 'react-redux';
const SideBar = () => {
    const images = [
        {img: home, text: "home", isChoosed: false},
        {img: book, text: "courses", isChoosed: false},
        {img: profile, text: "profile", isChoosed: true},
        {img: messages, text: "messages", isChoosed: false},
    ];
    const [isHide, setIsHide] = useState(false);
    const clickSideBar = () =>{
        setIsHide(!isHide);
    }
    const isNight = useSelector(state => state.night.isNight);
  return (
    <div  className={`${classes.sideBar}  ${!isHide?classes.sideBarHide:classes.sideBarOpen} ${isNight?classes.sideBar_black_bac:classes.sideBar_default_bac}`}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={menu} alt="" onClick={clickSideBar} />
                {/* <img src={logo} alt="" />
                <div className={classes.logo_text}>LeRN</div> */}
            </div>
            <div className={classes.nav}>
                {images.map(image => 
                    <li className={`${classes.nav_li} ${image.isChoosed? classes.nav_li_choosed: ""}`}>
                        <img src={image.img} className={classes.nav_li_img} alt="" />
                        <div className={classes.nav_li_section}>
                            <div className={`${classes.nav_li_text} ${!isHide?classes.nav_li_text_hide:classes.nav_li_text_open}`}>{image.text}</div>
                        </div>
                    </li>
                )}
            </div>
        </div>
    </div>
  )
}

export default SideBar