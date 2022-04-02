import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import {useState} from 'react'

export const GoogleComp=(value)=> {
 
    
      const imageUrl = "https://images.ctfassets.net/k0lk9kiuza3o/59iAyVjqqMENsNFL0v6bl2/07024e4c1f4013d7cf49de86e70e16b5/Bg-Shape.svg"
      
    
    const myCustomStyle = {
      display: 'flex',
      width: '100px',
      margin:'auto',
      padding: '12px',
      justifyContent: 'space-evenly',
      backgroundColor: '#0BC3F4',
      color : 'white',
      // borderRadius: '28px',
      border: '1px solid #0BC3F4'
    }

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
          <GoogleLogin
            clientId="1035784602329-ominopakcd5e4kqijcgt1bopsfg3ci13.apps.googleusercontent.com"
            buttonText=''       
            onSuccess={value.props}
            onFailure={value.props}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <Button variant= "contained" onClick={renderProps.onClick} disabled={renderProps.disabled} style={myCustomStyle}><GoogleIcon /><a>Log in</a></Button>
            )}
            // this is very important because
            responseType= 'code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
           </div>
       </Box>
    </Box>

           <Box sx={{backgroundImage: `url(${imageUrl})`,width:'500px',height:'500px'}}>
               
           </Box>
      </Box>
      )
}
