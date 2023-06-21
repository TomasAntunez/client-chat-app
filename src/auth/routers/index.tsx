import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { routes } from '..';
import { authRoutes } from '../config';
import { LoginPage, RegisterPage } from '../pages';
import { AuthLayout } from '../layouts';
import { useAuth } from '../hooks';


export const AuthRouter: React.FC<{}> = () => {

  const { auth: { logged } } = useAuth();

  if ( logged ) return <Navigate to={ `/${routes.CHAT}` } />

  return (
    <Routes>
      <Route element={ <AuthLayout /> }>
        <Route path={ authRoutes.LOGIN } element={ <LoginPage /> } />
        <Route path={ authRoutes.REGISTER } element={ <RegisterPage /> } />
      </Route>
 
      <Route path={ routes.ANY } element={ <Navigate to={ authRoutes.LOGIN } /> } />
    </Routes>
  );
};
