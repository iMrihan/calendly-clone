import React from 'react'
import {GoogleComp} from "../googleLoginComponents/GoogleComp"
import {Home} from "../HomeComponents/Home"
import {Navigate} from "react-router-dom"
import {AfterLoginRoute} from "../AfterLoginRoute/AfterLoginRoute"
import {Link} from "react-router-dom"

export default function StartComp() {

    const logged = localStorage.getItem("userToken") || null;
  return (
    <div style={{marginTop:'20vh',marginBottom:'20vh'}}>
        {
          !logged ? (
            
            <GoogleComp />
      
      
      ) : (
        <Navigate to="/Home" replace={true}/>
        // <AfterLoginRoute />
        
        // <Home />
  
      
      )
    }
    
    </div>
  )
}
