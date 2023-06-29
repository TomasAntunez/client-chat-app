import { ResponseUser } from './response-types';

export type ChatState = {
  uid: string;
  activeChat: string | null;
  users: Array<ResponseUser>;
  messages: Array<any>;
}


export { type ResponseUser } from './response-types';