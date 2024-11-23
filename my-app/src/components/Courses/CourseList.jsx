import React from 'react'
import classes from "../../style/main_page.module.css";
import { Course_item } from './Courses_item';
export const CourseList = ({courses}) => {
  return (
    <div className={`${classes.courses_list} ${classes.container}`}>
            {courses.map(course => 
                <Course_item product_img={course.product_img} company_img={course.company_img} price = {course.price} course_name={course.course_name} course_author={course.course_author}/>
            )}
        </div>
  )
}
