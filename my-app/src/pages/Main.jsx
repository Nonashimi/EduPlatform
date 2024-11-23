import React, { createContext, useEffect, useMemo, useState } from 'react'
import classes from "../style/main_page.module.css";
import { Preview } from '../components/Main_page_preview_components/Preview';
import Thumbnail from "../assest/Thumbnail.png";
import Logo from "../assest/Logo.png";
import { CoursesSection } from '../components/Courses/CoursesSection';
import { Footer } from '../components/Courses/Footer';
import { useSelector } from 'react-redux';
export const MyContext = createContext(null);

export const Main = () => {
  
const courses = [
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 1",
    course_author: "Author 1",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 2",
    course_author: "Author 2",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 3",
    course_author: "Author 3",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 4",
    course_author: "Author 4",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 5",
    course_author: "Author 5",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 6",
    course_author: "Author 6",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 7",
    course_author: "Author 7",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 8",
    course_author: "Author 8",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 9",
    course_author: "Author 9",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 10",
    course_author: "Author 10",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 11",
    course_author: "Author 11",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 12",
    course_author: "Author 12",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 13",
    course_author: "Author 13",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 14",
    course_author: "Author 14",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 15",
    course_author: "Author 15",
  },
  {
    product_img: Thumbnail,
    company_img: Logo,
    price: "Free",
    course_name: "Course 16",
    course_author: "Author 16",
  },
];
const allPage = Math.ceil(courses.length/8);
const [thisPage, setThisPage] = useState(1);
let onPageData = useMemo(() => {
  const data = [];
  for (let i = (thisPage - 1) * 8; i < thisPage * 8; i++) {
    if (courses[i] !== undefined) { 
      data.push(courses[i]);
    }
  }
  return data;
}, [thisPage, courses]);

const clickSeeAll = () =>{
  return courses;

}
const value = {allPage: allPage, thisPage: thisPage, setThisPage: setThisPage, clickSeeAll: clickSeeAll};
  return (
    <MyContext.Provider value = {value}>
      <div className={classes.main_page}>
        <Preview/>
        <CoursesSection courses = {onPageData}/>
        <Footer/>
      </div>
    </MyContext.Provider>
    
  )
}

export default Main