import { FC, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CircularProgress, Container, Grid } from '@mui/material';

import { routes } from './config';
import { AuthRouter, useAuth } from './auth';
import { ChatRouter } from './chat';


export const AppRouter: FC<{}> = () => {

  const { auth, verifyToken } = useAuth();

  useEffect( () => {
    verifyToken();
  }, [verifyToken]);

  if ( !auth.checked ) {
    return (
      <Container sx={{ height: '100vh' }}>
        <Grid
          container
          item
          justifyContent='center'
          alignItems='center'
          height='100%'
          width='100%'
        >
          <CircularProgress color="inherit" size={80}/>
        </Grid>
      </Container>
    )
  }


  return (
    <Router>
      <Routes>
        <Route path={ `${routes.AUTH}/*` } element={ <AuthRouter /> } />
        <Route path={ `${routes.CHAT}/*` } element={ <ChatRouter /> } />

        <Route path={ routes.ANY } element={ <Navigate to={ routes.CHAT } /> } />
      </Routes>
    </Router>
  )
}
