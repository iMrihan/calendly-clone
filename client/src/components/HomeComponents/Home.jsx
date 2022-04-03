import React from 'react'
import {BasicTabs} from "./EventTypes"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import {Navbar} from "../Navbar/Navbar"
import {Footer} from "../Footer/Footer"
import {Link} from "react-router-dom"


 


export const Home = () => {
  return (

    <Box className="Home" mr='10vw' ml='10vw' sx={{marginTop:'22vh',marginBottom:'22vh'}}>
  
        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography variant="h5">My Calendly <KeyboardArrowDownRoundedIcon /></Typography>
            <Link to="/form"><Button variant= "contained" style={{ borderRadius: 50 }} >+ Create</Button></Link>
        </Box>
        <BasicTabs />
    </Box>
  )
}
