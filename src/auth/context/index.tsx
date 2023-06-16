import React, { createContext, useState, useCallback } from 'react';

import { AuthScheme, Login, Register } from '../types';
import { authenticateUser } from '../services';


type ContextProps = {
  auth: AuthScheme;
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


  const login: Login = async ( userData ) => {
    const { data, error } = await authenticateUser(userData);
    if ( error ) return error;
    
    if (data.ok) {
      localStorage.setItem( 'token', data.token );

      const { user } = data;
      setAuth({
        uid: user.uid,
        name: user.name,
        email: user.email,
        checking: false,
        logged: true
      });
    }
  };

  const register: Register = ({ name, email, password }) => {

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
