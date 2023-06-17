
type WithAuth = false | { key: string, value: string };

type Method = 'GET' | 'POST' | 'PUT' | 'PATH' | 'DELETE';

export type Params = {
  url: string;
  method?: Method
  withAuth?: WithAuth;
  data?: Object | null;
};


export type ResponseError = {
  ok: false;
  msg: string;
} ;
