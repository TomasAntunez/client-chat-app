import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { authRoutes } from '../config';
import { routes } from '../../config';
import { LoginPage } from '../pages';
import { RegisterPage } from '../pages';
import { AuthLayout } from '../layouts';


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
