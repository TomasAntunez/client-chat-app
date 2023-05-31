import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { authRoutes, routes } from '../config/routes';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { AuthLayout } from '../layouts/auth-layout';


export const AuthRouter: React.FC<{}> = () => {
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
