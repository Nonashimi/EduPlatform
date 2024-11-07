import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Autentification from '../pages/Autentification';
import ForgotPassword from '../pages/ForgetPages/ForgotPassword';
import NewPassword from '../pages/ForgetPages/NewPassword';
import { ProfilePage } from '../pages/ProfilePage';

const AppRouter = () => {
    const routs = [
        {path:"/", element:<Autentification/>},
        {path:"/forgotPassword", element:<ForgotPassword/>},
        {path:"/newPassword", element:<NewPassword/>},
        {path:"/profile", element:<ProfilePage/>}
    ];
  return (
    <BrowserRouter>
    <Routes>
      {routs.map(r => 
        <Route path= {r.path} element = {r.element}></Route>
      )}
    </Routes>
    </BrowserRouter>
)
}

export default AppRouter