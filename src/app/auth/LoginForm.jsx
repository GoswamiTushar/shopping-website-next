"use client"

import { Box, Button, FormControl, TextField } from "@mui/material"
import { useState } from "react"

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  }
}

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      if (res.ok) {
        const data = await res.json(); // Parse the JSON content

        console.log({ data })

        // Assuming your token is in the 'token' property of the response
        const token = data.token;

        // Save the token to sessionStorage or wherever you want
        sessionStorage.setItem("token", token);

        console.log("Login successful");
      } else {
        console.error("Login failed:", res.statusText);
      }
    } catch (err) {
      console.log({ err })
    }
  }

  return (
    <Box component={'form'} autoComplete="off"  >
      <FormControl sx={styles.root} >
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setCredentials({ ...credentials, email: e.target.value })
          }}
        />
        <TextField
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setCredentials({ ...credentials, password: e.target.value })
          }}
        />
        <Button onClick={handleLogin} variant="contained" fullWidth >Login</Button>
      </FormControl>
    </Box>
  )
}
export default LoginForm