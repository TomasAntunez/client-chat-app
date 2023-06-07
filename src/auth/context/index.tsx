import React, { createContext, useState, useCallback } from 'react';

import { AuthScheme, Login, Register } from '../types';


type ContextProps = {
  login: Login;
  register: Register;
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


  const login: Login = ({ email, password }) => {

  };

  const register: Register = ({ name, email, password }) => {

  };

  const verifyToken = useCallback( () => {

  }, [] );

  const logout = () => {

  };


  return (
    <AuthContext.Provider value={{
      login,
      register,
      verifyToken,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
};
