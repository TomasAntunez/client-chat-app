import { ResponseUser, ResponseMessage } from './response-types';

export type ChatState = {
  uid: string;
  activeChat: string | null;
  users: Array<ResponseUser>;
  messages: Array<ResponseMessage>;
}


export { type ResponseUser, type ResponseMessage } from './response-types';