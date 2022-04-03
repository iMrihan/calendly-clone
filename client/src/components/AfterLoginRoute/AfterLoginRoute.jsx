import React from 'react'
import {Routes,Route} from 'react-router-dom'
// import {GoogleComp} from "../googleLoginComponents/GoogleComp"
import StartComp from "../StarComp/StartComp"
import {Form} from "../formComponents/form"
import {Home} from "../HomeComponents/Home"
import LoginNavbar from "../LoginNav/LoginNavbar"
import Main from "../Home/Main";
import {Availability} from "../Availability/Availablity"

export function AfterLoginRoute() {
  return (
    <div>
      <LoginNavbar />
        <Routes>
        <Route  path="/" element={ <Main /> } />
        <Route path="/login" element={<StartComp />} />
        <Route path="/Home" element={<Home />} />
       <Route path="/form" element= {<Form />} />
       <Route path="/avail" element={<Availability />} />
        </Routes>
    </div>
  )
}
