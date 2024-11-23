import React, { useContext } from 'react'
import classes from "../../style/main_page.module.css";
import { Course_pagination } from './course_pagination';
import { MyContext } from '../../pages/Main';
export const CourseTop = () => {
  const contextValue = useContext(MyContext);
  return (
    <div className={classes.courses_top}>
            <div className={classes.courses_top_text}>
              Top Courses
            </div>
            <div className={classes.courses_top_functions}>
              <Course_pagination/>
              <div className={classes.courses_top_func_see_all} onClick={contextValue.clickSeeAll}>
                See all
              </div>
            </div>
          </div>
  )
}
