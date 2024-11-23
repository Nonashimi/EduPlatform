import React from 'react'
import mail from "../../assest/svg9724.png";
import phone from "../../assest/SVGRepo_iconCarrier.png";
import inst from "../../assest/Vector.png";
import classes from "../../style/main_page.module.css";

export const Prev_contacts = () => {
  return (
    <nav className={classes.main_page_preview_contacts}>
        <li><img src={inst}></img></li>
        <li><img src={mail}></img></li>
        <li><img src={phone}></img></li>
    </nav>  )
}
