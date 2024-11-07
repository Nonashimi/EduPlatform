import React from 'react'
import classes from "./MySearch.module.css";
import search from "../../assest/icons8-search-50.png"
import { useSelector } from 'react-redux';
const MySearch = (props) => {
  const isNight = useSelector(state => state.night.isNight);
  return (
    <div className={classes.my_search}>
        <input className={classes.input} type="text" {...props}/>
        <div className={`${classes.img_search} ${isNight?classes.img_search_black_bac:classes.img_search_default_bac}`}>
            <img src={search} alt="" />
        </div>
    </div>
  )
}

export default MySearch