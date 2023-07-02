import { ChatState, ResponseUser, ResponseMessage } from '../types';
import { initialState } from './chat-context';


export enum actionTypes {
  LOADED_USERS  = '[CHAT] loaded users',
  ACTIVATE_CHAT = '[CHAT] activate chat',
  NEW_MESSAGE   = '[CHAT] new message',
  LOAD_MESSAGES = '[CHAT] load messages',
  CLEAR_CHAT    = '[CHAT] clear chat'
}

// Actions
type LoadedUsers  = { type: actionTypes.LOADED_USERS, payload: Array<ResponseUser> };
type ActivateChat = { type: actionTypes.ACTIVATE_CHAT, payload: string };
type NewMessage   = { type: actionTypes.NEW_MESSAGE, payload: ResponseMessage };
type LoadMessages = { type: actionTypes.LOAD_MESSAGES, payload: Array<ResponseMessage> };
type ClearChat    = { type: actionTypes.CLEAR_CHAT };

type Action = LoadedUsers | ActivateChat | NewMessage | LoadMessages | ClearChat;


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

    
    case actionTypes.NEW_MESSAGE:
      if ( (state.activeChat === action.payload.from) || (state.activeChat === action.payload.to) ) {
        return {
          ...state,
          messages: [...state.messages, action.payload]
        }
      }
      return state;

    
    case actionTypes.LOAD_MESSAGES:
      return {
        ...state,
        messages: [...action.payload]
      }

    
    case actionTypes.CLEAR_CHAT:
      return initialState;


    default:
      return state;
  }

};