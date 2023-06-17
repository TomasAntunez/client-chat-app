
export type LoginResponse = {
  token: string;
  user: {
    uid: string;
    name: string;
    email: string;
    online: boolean;
  }
}