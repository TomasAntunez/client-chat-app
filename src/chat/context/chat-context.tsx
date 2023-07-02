import { FC, Dispatch, createContext, useReducer, useEffect } from 'react';

import { chatReducer, actionTypes } from './chat-reducer';
import { ChatState, ResponseUser, ResponseMessage } from '../types';
import { useSocket } from '../';


type ContextProps = {
  chatState: ChatState;
  dispatch: Dispatch<any>;
}

export const ChatContext = createContext<ContextProps | null>(null);


export const initialState: ChatState = {
  uid: '',
  activeChat: null,
  users: [],
  messages: []
};


export const ChatProvider: FC<{ children: JSX.Element }> = ({ children }) => {

  const { socket } = useSocket();

  const [ chatState, dispatch ] = useReducer( chatReducer, initialState );


  // Listen to users connected
  useEffect( () => {
    socket?.on( 'user-list', (users: Array<ResponseUser>) => {
      dispatch({
        type: actionTypes.LOADED_USERS,
        payload: users
      })
    });
  }, [socket]);

  useEffect(() => {
    socket?.on( 'personal-message', (payload: ResponseMessage) => {
      console.log(payload);
      
      dispatch({
        type: actionTypes.NEW_MESSAGE,
        payload: payload
      })
    });
  }, [socket]);


  return (
    <ChatContext.Provider value={{
      chatState,
      dispatch
    }}>
      { children }
    </ChatContext.Provider>
  );
};