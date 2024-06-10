
import { Button, TextField } from '@mui/material'
import React from 'react'
import './Login.css'; 


const Login = () => {
  return (
    <div className='container'>
     <form action="">
      <br />
        <h1 className='title'>Login</h1>
        <br />
        username:  <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br /><br /> 
        email: &nbsp; &nbsp; &nbsp; <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br /><br />
        password:      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /><br /><br /><br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' type='submit'>Submit</Button>
     </form>

    </div>
  )
}

export default Login