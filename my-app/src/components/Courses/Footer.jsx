import React from 'react'
import classes from "../../style/main_page.module.css";
import site_logo from "../../assest/graduate-with-cap-svgrepo-com (2) 1.png";
export const Footer = () => {
  return (
    <footer className={classes.footer}>
        <div className={classes.footer_inner}>
          <div className={classes.footer_learn_info}>
          <div className={classes.footer_text_logo}>
                  <img src={site_logo} alt="" />
                  <div>LeRN</div>
                </div>
            <div className={classes.footer_learn_text}>
            We are a global platform for students and teachers, bringing people together for collaborative learning and growth. Join us and gain access to endless opportunities for knowledge.
            </div>
          </div>
          <div className={classes.footer_learn_links}>
            <div className={classes.learn_links}>
              <div className={classes.links_title}>
                <div className={classes.footer_text_logo}>
                  <img src={site_logo} alt="" />
                  <div>LeRN</div>
                </div>
              </div>
              <nav>
                <li>About</li>
                <li>Affiliate</li>
                <li>Open LeRN</li>
                <li>Career</li>
                <li>News</li>
              </nav>
            </div>
          </div>
        </div>
        <div className={classes.subfooter}>
          <div className={classes.subfooter_inner}>
            <div className={classes.subfooter_info}>
              <div className={classes.subfooter_city}>Almaty, Kazakhystan</div>
              <div className={classes.subfooter_year}>2024</div>
            </div>
          </div>
        </div>
       </footer>
  )
}
