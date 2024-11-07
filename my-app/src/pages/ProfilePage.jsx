import React from 'react'
import classes from "../style/profile.module.css"
import SideBar from '../components/ProfileComponents/SideBar';
import ProfileHeader from '../components/ProfileComponents/ProfileHeader';
import Profile from '../UI/Profile/Profile';
import Information from '../components/Information';
import { useSelector } from 'react-redux';
export const ProfilePage = () => {
  const info = [
    {title: "Name", text: "Nazym"},
    {title: "Surname", text: "Nazhenova"},
    {title: "Email Address", text: "220103204@stu.sdu.edu.kz"},
    {title: "Phone Number", text: "123456789"},
    {title: "Bio", text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro aliquam eius praesentium fuga corporis blanditiis dolorem consequuntur dignissimos nulla."},
    {title: "Birzh Date", text: "01.02.2003"}
  ]
  const address = [
    {title:"Country", text: "Kazakhstan"},
    {title:"City", text: "Almaty"},
    {title:"Region", text: "Kaskelen"}
  ]
  const isNight = useSelector(state => state.night.isNight);
  return (
    <div>
        <SideBar/>
        <ProfileHeader/>
        <div className={`${classes.profile_container} ${isNight?classes.profile_black_bac:classes.profile_default_bac}`}>
          <div className={classes.profile_section}>
            <div className={classes.profile_inner}>
              <div className={classes.profile_title}>
                Teacher Profile
              </div>
              <Profile/>
              <Information title = "Account Information" arrInfo={info}/>
              <Information title = "Address" arrInfo={address}/>
            </div>
          </div>
        </div>
    </div>
  )
}
