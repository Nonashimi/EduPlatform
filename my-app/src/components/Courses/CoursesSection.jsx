import React from 'react'
import classes from "../../style/main_page.module.css";
import { CourseTop } from './CourseTop';
import { CourseList } from './CourseList';

export const CoursesSection = ({courses}) => {
  return (
    <div>
        <div className={classes.courses}>
        <div className={classes.container}>
            <CourseTop/>
        </div>
        <CourseList courses={courses}/>
       </div>
    </div>
  )
}
