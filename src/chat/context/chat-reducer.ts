import { ChatState, ResponseUser } from '../types';


export enum actionTypes {
  LOADED_USERS = '[Chat] loaded users',
  ACTIVATE_CHAT = '[Chat] activate chat'
}

// Actions
type LoadedUsers = { type: actionTypes.LOADED_USERS, payload: Array<ResponseUser> };
type ActivateChat = { type: actionTypes.ACTIVATE_CHAT, payload: string };

type Action = LoadedUsers | ActivateChat;


export const chatReducer = ( state: ChatState, action: Action ) => {

  switch (action.type) {

    case actionTypes.LOADED_USERS:
      return {
        ...state,
        users: [...action.payload]
      };


    case actionTypes.ACTIVATE_CHAT:
      if ( state.activeChat === action.payload ) return state;
    
      return {
        ...state,
        activeChat: action.payload,
        messages: []
      }


    default:
      return state;
  }

};