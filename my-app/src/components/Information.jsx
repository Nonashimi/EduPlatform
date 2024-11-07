import React from 'react'
import classes from "../style/Information.module.css"
import Edit from '../UI/Edit/Edit'
const Information = ({title, arrInfo}) => {
  return (
    <div>
        <div className={classes.account_info}>
                <div className={classes.account_info_text}>
                 {title}
                </div>
                <Edit/>
              </div>
              <div className={classes.account_info_inner}>
                 {
                    arrInfo.map(i => 
                        <div className={classes.account_info_el}>
                            <div className={classes.account_el_title}>{i.title}</div>
                            <div className={classes.account_el_text}>{i.text}</div>
                        </div>
                    )
                 }
              </div>
    </div>
  )
}

export default Information