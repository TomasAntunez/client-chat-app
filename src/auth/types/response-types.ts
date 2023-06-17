
export type LoginResponse = {
  token: string;
  user: {
    uid: string;
    name: string;
    email: string;
    online: boolean;
  }
}

export type LoginResponseOk = {
  ok: true;
  result: LoginResponse
}
