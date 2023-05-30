import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { routes } from '../config/routes';
import { LoginPage } from '../pages/login';
import { RegisterPage } from '../pages/register';
import { ChatPage } from '../pages/chat';


export const AppRouter: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path={ routes.LOGIN } element={ <LoginPage /> } />
        <Route path={ routes.REGISTER } element={ <RegisterPage /> } />
        <Route path={ routes.CHAT } element={ <ChatPage /> } />

        <Route path={ routes.ANY } element={ <Navigate to={ routes.CHAT } /> } />
      </Routes>
    </Router>
  )
}
