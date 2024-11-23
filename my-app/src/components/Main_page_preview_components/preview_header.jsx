import React from 'react'
import classes from "../../style/main_page.module.css";
import user from "../../assest/User.png";
import MySearch from "../../UI/MySearch/MySearch";
import SwitchFon from "../../UI/SwitchFon/SwitchFon";
export const Prev_header = () => {
  return (
    <header className={classes.main_page_header}>
                <div className = {classes.mp_header_profile}>
                <img src={user} alt="" />
              </div>
              <div className={classes.mp_header_search}>
                <div className={classes.mp_header_s_text}>
                  Search Anything
                </div>
                  <MySearch placeholder = "Search..."/>
              </div>
              <SwitchFon/>
            </header>
  )
}
