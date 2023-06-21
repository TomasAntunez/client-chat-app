
type CustomHeaders = false | Array<[ key: string, value: string ]>;

type Method = 'GET' | 'POST' | 'PUT' | 'PATH' | 'DELETE';

export type Params = {
  url: string;
  method?: Method;
  withAuth?: boolean;
  customHeaders?: CustomHeaders;
  data?: Object | null;
};


export type ErrorMessage = { msg: string }
