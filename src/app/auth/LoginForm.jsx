"use client"

import { Box, FormControl, TextField } from "@mui/material"
import { useState } from "react"

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  return (
    <Box component={'form'} autoComplete="off"  >
      <FormControl >
        <TextField type="email" id="outlined-basic" label="Email" variant="outlined" />
        <TextField type="password" id="outlined-basic" label="Password" variant="outlined" />
      </FormControl>
    </Box>
  )
}
export default LoginForm