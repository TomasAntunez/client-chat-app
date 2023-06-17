import React from "react"
import { Typography, Paper, TextField, Button, Box } from "@mui/material";
import { Link } from 'react-router-dom';

import { useRegister } from './useRegister';


export const RegisterPage: React.FC<{}> = () => {

  const { formData, handleChange, handleSubmit } = useRegister();


  return (
    <>
      <Typography variant="h2" component="h1" align="center" fontWeight="regular">
        Register
      </Typography>

      <Paper elevation={0} sx={{
        marginTop: 4,
        paddingX: 7,
        paddingY: 4
      }}>
        <form onSubmit={ handleSubmit }>
          <TextField label="Name" variant="outlined" fullWidth
            name="name"
            value={ formData.name }
            onChange={ handleChange }
          />
          <TextField label="Email" variant="outlined" fullWidth sx={{ marginTop: 3 }}
            name="email"
            value={ formData.email }
            onChange={ handleChange }
          />
          <TextField label="Password" variant="outlined" fullWidth type="password" sx={{ marginTop: 3 }}
            name="password"
            value={ formData.password }
            onChange={ handleChange }
          />
          <TextField label="Repeat Password" variant="outlined" fullWidth type="password" sx={{ marginTop: 3 }}
            name="repeatPassword"
            value={ formData.repeatPassword }
            onChange={ handleChange }
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/auth/login">
              <Button sx={{ marginTop: 4 }}>Do you have an Account?</Button>
            </Link>

            <Button
              type="submit"
              size="large"
              variant="outlined"
              sx={{ marginTop: 4 }}

            >
              Create Account
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};
