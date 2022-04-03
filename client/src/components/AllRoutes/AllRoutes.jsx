import React from "react";
import {Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import Main from "../Home/Main";
import { Navbar } from "../Navbar/Navbar";
import { Individuals } from "../Individuals/Individuals";
import ScrollToTop from "../ScrollTop/ScrollTop";
// import {Afterlogin} from"../AfterLogin/Afterlogin"
import {Home} from "../HomeComponents/Home"
import LoginNavbar from "../LoginNav/LoginNavbar"
import Teams from "../Teams/Teams"

import StartComp from "../StarComp/StartComp"


export const AllRoutes = () => {


  

  return (
    <div>
    

 
      <Navbar />
      <ScrollToTop>
        <Routes>
          
          <Route  path="/" element={ <Main /> } />
          <Route path="/for-individuals" element={ <Individuals /> } />
          <Route path="/login" element={<StartComp />} />
          <Route path="/team" element={<Teams />} />
   
        </Routes>
      </ScrollToTop>
      <Footer />

   

    </div>
  )
};
