import React from 'react'
import { Prev_contacts } from './preview_contacts.'
import classes from "../../style/main_page.module.css";
import image_prev from "../../assest/HeroImage.png";
import { Prev_header } from './preview_header';

export const Preview = () => {
  return (
    <div className={classes.main_page_start}>
        <div className={classes.container}>
            <Prev_header/>
            <div className={classes.main_page_preview}>
                <div className={classes.main_page_preview_img}>
                    <Prev_contacts/>
                    <div className={classes.main_page_preview_img_text}>
                        We connect you to learning opportunities that shape your future
                    </div>
                    <div className={classes.main_page_block}></div>
                    <div className={classes.main_page_rectangle}></div>

                    <img src={image_prev} alt=""/>
                </div>
                <div className={classes.main_page_preview_numbers}>
                    <div className="">0</div>
                    <div className="">3</div>
                </div>
            </div>    
    </div>
  </div>
   
  )
}
