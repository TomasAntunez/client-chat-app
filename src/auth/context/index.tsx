import React, { createContext, useState, useCallback } from 'react';

import { AuthScheme, UserLogin, UserRegister } from '../types';
import { authenticateUser, createAccount, renewToken } from '../services';
import { ResponseError, reportError, ErrorMessage } from '..';


type ContextProps = {
  auth: AuthScheme;
  login: (data: UserLogin) => Promise< void | ErrorMessage >;
  register: (data: UserRegister) => Promise< void | ErrorMessage >;
  verifyToken(): void;
  logout(): void;
};

export const AuthContext = createContext<ContextProps | null>(null);


const initialState: AuthScheme = {
  uid: '',
  name: '',
  email: '',
  checked: false,
  logged: false
};


export const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {

  const [ auth, setAuth ] = useState<AuthScheme>( initialState );


  const login = async ( userData: UserLogin ) => {
    try {
      const result = await authenticateUser( userData );
      const { token, user } = result;

      localStorage.setItem( 'token', token );

      setAuth({
        uid: user.uid,
        name: user.name,
        email: user.email,
        checked: true,
        logged: true
      });

    } catch (error) {
      if ( error instanceof ResponseError ) {
        return { msg: 'The email or password is wrong' };
      }
      return reportError(error);
    }
  };


  const register = async ( userData: UserRegister ) => {
    try {
      const { token, user } = await createAccount( userData );

      localStorage.setItem( 'token', token );

      setAuth({
        uid: user.uid,
        name: user.name,
        email: user.email,
        checked: true,
        logged: true
      });

    } catch (error) {
      if ( error instanceof ResponseError ) {
        if (error.status === 400) {
          return { msg: error.detail.msg };
        }
      }
      return reportError(error);
    }
  };


  const verifyToken = useCallback( async () => {
    try {
      const { token, user } = await renewToken();

      localStorage.setItem('token', token);
      setAuth({
        uid: user.uid,
        name: user.name,
        email: user.email,
        checked: true,
        logged: true
      });

      return true;

    } catch (error) {
      if (error instanceof ResponseError) {
        setAuth({
          ...initialState,
          checked: true
        });
      }

      return false;
    }
  }, [] );


  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      ...initialState,
      checked: true
    });
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
