import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ChatPage } from '../pages';
import { ChatProvider } from '../context';
import { routes, authRoutes, useAuth } from '..';


export const ChatRouter: FC<{}> = () => {

  const { auth: { logged } } = useAuth();

  if (!logged) return <Navigate to={ `/${routes.AUTH}/${authRoutes.LOGIN}` } />

  return (
    <ChatProvider>
      <Routes>
        <Route index element={ <ChatPage /> } />

        <Route path={ routes.ANY } element={ <Navigate to={ routes.CHAT } /> } />
      </Routes>
    </ChatProvider>
  );
};
