import { Alert, Button } from '@mui/material'
import React from 'react'

const LoginSuccess = ({handleClose}) => {
  return (
    <div>
        <Alert severity="success">Login Success!</Alert>
        <Button variant="outlined" sx={{margin: '1em auto', display:'block'}} color="success" onClick={handleClose}>Ok</Button>
    </div>
  )
}

export default LoginSuccess