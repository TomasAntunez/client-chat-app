import React, { createContext, useState, useCallback } from 'react';

import { AuthScheme, UserLogin } from '../types';
import { authenticateUser } from '../services';


type ContextProps = {
  auth: AuthScheme;
  login: (data: UserLogin) => Promise< string | void >;
  register: () => void;
  verifyToken(): void;
  logout(): void;
};

export const AuthContext = createContext<ContextProps | null>(null);


const initialState: AuthScheme = {
  uid: '',
  name: '',
  email: '',
  checking: true,
  logged: false
};


export const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

  const [ auth, setAuth ] = useState<AuthScheme>( initialState );


  const login = async ( userData: UserLogin ) => {
    const result = await authenticateUser(userData);
    
    if ( !result.ok ) return result.msg;

    const { user, token } = result.result;

    localStorage.setItem( 'token', token );

    setAuth({
      uid: user.uid,
      name: user.name,
      email: user.email,
      checking: false,
      logged: true
    });
  };

  const register = () => {

  };

  const verifyToken = useCallback( () => {

  }, [] );

  const logout = () => {

  };


  return (
    <AuthContext.Provider value={{
      auth,
      login,
      register,
      verifyToken,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
};
