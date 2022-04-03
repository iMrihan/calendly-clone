import React from 'react'
import { GoogleLogin } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button'
import axios from 'axios'

export default function LoginButton() {
        const responseGoogle = (response) =>{

        const {code} = response;
        axios.post('http://localhost:4000/api/create-tokens', { code })
        .then(response => {
         console.log(response)
          const {id_token} = response.data;
          const {refresh_token} = response.data
          localStorage.setItem('userToken', id_token);
          localStorage.setItem('ref_token', refresh_token);
         window.location.reload(false);
        })
        .catch(err => { console.log(err.message) });
      }
      const responseError = error => console.log(error);
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


  return (
    <div>
            <GoogleLogin
            clientId="1035784602329-ominopakcd5e4kqijcgt1bopsfg3ci13.apps.googleusercontent.com"
            buttonText=''       
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            render={renderProps => (
              <Button variant= "contained" onClick={renderProps.onClick} disabled={renderProps.disabled} style={myCustomStyle}>Log in</Button>
            )}
            // this is very important because
            responseType= 'code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar'
          />
    </div>
  )
}
