import { FC } from "react"
import { Typography, Paper, TextField, Button, Box, FormControlLabel, Checkbox } from "@mui/material";
import { Link } from 'react-router-dom';

import { useLogin } from './useLogin';


export const LoginPage: FC<{}> = () => {

  const {
    formData,
    handleSubmit,
    handleChangeTextFields,
    handleChangeCheckbox
  } = useLogin();

  return (
    <>
      <Typography variant="h2" component="h1" align="center" fontWeight="regular">
        Login
      </Typography>

      <Paper elevation={0} sx={{
        marginTop: 4,
        paddingX: 7,
        paddingY: 4
      }}>
        <form onSubmit={ handleSubmit }>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="text"
            value={ formData.email }
            onChange={ handleChangeTextFields }
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            sx={{ marginTop: 3 }}
            value={ formData.password }
            onChange={ handleChangeTextFields }
          />

          <FormControlLabel
            control={ <Checkbox checked={ formData.rememberme } /> }
            label="Remember"
            sx={{ mt: 2 }}
            value={ formData.rememberme }
            onChange={ handleChangeCheckbox }
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Link to="/auth/register">
              <Button sx={{ marginTop: 4 }}>New Account?</Button>
            </Link>

            <Button
              type="submit"
              size="large"
              variant="outlined"
              sx={{ marginTop: 4 }}
            >
              Sign in
            </Button>
          </Box>
        </form>
      </Paper>
    </>
  );
};
