import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { routes } from './config';
import { AuthRouter } from './auth/routes';
import { ChatPage } from './chat/pages';


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
