import React from 'react'
import classes from "./course_item.module.css";

export const Course_item = ({product_img, company_img, price, course_name, course_author}) => {
  return (
    <div className={classes.course_item}>
              <div className={classes.course_item_product}>
                <img src={product_img} className={classes.product_img} alt="" />
                <div className={classes.product_info}>
                  <div className={classes.product_company}>
                    <img src={company_img} alt="" />
                  </div>
                  <div className={classes.product_price}>
                    {price}
                  </div>
                </div>
              </div>
              <div className={classes.course_item_text}>
                <div className={classes.course_item_text_name}>
                  {course_name}
                </div>
                <div className={classes.course_item_text_author}>
                  {course_author} 
                </div>
              </div>
            </div>
  )
}
