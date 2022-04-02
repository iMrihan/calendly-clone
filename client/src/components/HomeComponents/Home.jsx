import React from 'react'
import {BasicTabs} from "./EventTypes"
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';




 


export const Home = () => {
  return (
    <Box className="Home" mr='10vw' ml='10vw'>
        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Typography variant="h5">My Calendly <KeyboardArrowDownRoundedIcon /></Typography>
            <Button variant= "contained" style={{ borderRadius: 50 }} >+ Create</Button>
        </Box>
        <BasicTabs />
    </Box>
  )
}
