
export type ResponseUser = {
  uid: string;
  email: string;
  name: string;
  online: boolean;
}

export type ResponseMessage = {
  from: string;
  to: string;
  message: string;
  createdAt: string;
};
