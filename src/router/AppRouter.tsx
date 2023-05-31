import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { routes } from '../config/routes';
import { AuthRouter } from './AuthRouter';
import { ChatPage } from '../pages/chat';


export const AppRouter: React.FC<{}> = () => {
  return (
    <Router>
      <Routes>
        <Route path={ routes.AUTH } element={ <AuthRouter /> } />
        <Route path={ routes.CHAT } element={ <ChatPage /> } />

        <Route path={ routes.ANY } element={ <Navigate to={ routes.CHAT } /> } />
      </Routes>
    </Router>
  )
}
