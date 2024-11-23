import React, { useContext } from 'react'
import classes from "../../style/main_page.module.css";
import { MyContext } from '../../pages/Main';
import next from "../../assest/next.png"
import not_active_next from "../../assest/next_not_active.png";

export const Course_pagination = () => {

  const contextValue = useContext(MyContext);
  const clickNext = () =>{
    if(contextValue.allPage > contextValue.thisPage){
      contextValue.setThisPage(contextValue.thisPage + 1);
    }
  }
  const clickPrev = () =>{
    if(contextValue.thisPage > 1){
      contextValue.setThisPage(contextValue.thisPage - 1);
    }
  }
  
  return (
    <div className={classes.scroll_courses}>
        <img src={contextValue.thisPage > 1?next:not_active_next} onClick={clickPrev} className={`${classes.scroll_courses_prev} `} alt="" />
        <div className={classes.scroll_courses_numbers}>
            {Array.from({ length: contextValue.allPage }, (_, i) => (
                <div className={i + 1 != contextValue.thisPage ? classes.sc_n : classes.sc_n_active}>{i + 1}</div>
            ))}
        </div>
        <img src={contextValue.thisPage < contextValue.allPage?next:not_active_next} onClick={clickNext} className={classes.scroll_courses_next} alt="" />
    </div>
  )
}
