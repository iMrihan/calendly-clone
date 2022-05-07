import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import {useState} from 'react'
import LoginButton from '../LoginButton/LoginButton';


export const GoogleComp=()=> {
 
    
      const imageUrl = "https://images.ctfassets.net/k0lk9kiuza3o/59iAyVjqqMENsNFL0v6bl2/07024e4c1f4013d7cf49de86e70e16b5/Bg-Shape.svg"
      
    


    const mystyleBox = {
      display: 'flex',
      
      overflow: 'hidden',
    }
    const handleSubmit = () =>{
      localStorage.setItem('userProfile',JSON.stringify({
        name: user,
        email: mail
      }))
    }

    const [user,setUser] = useState('');
    const [mail,setMail] = useState('');

  return (
      <Box sx={{display: 'flex',width:'100%',justifyContent: 'sapce-evenly',marginLeft:'8%',marginRight:'8%'}}>
           <Box>
       <Typography variant="h2" style={{fontWeight:'800',color:'rgb(11, 53, 88)'}}>Welcome back <br /> to <b style={{color: '#0BC3F4'}}>Calendly</b></Typography>
       <p style={{color: 'rgb(71, 103, 136)'}}>Log in to your account to get back to your hub for scheduling meetings.</p>
       <br />
       <br />
       <Box style={mystyleBox}>
           <input type="text" placeholder="name" onChange={(e) => setUser(e.target.value)}/>
           <input type="text" placeholder="Email Address" onChange={(e) => setMail(e.target.value)}/>
           <div onClick={handleSubmit}>
             <LoginButton />
           </div>
           
       </Box>
    </Box>

           <Box sx={{backgroundImage: `url(${imageUrl})`,width:'500px',height:'500px'}}>
               
           </Box>
      </Box>
      )
}
