import { Params }  from '../types';


const baseUrl = process.env.REACT_APP_API_URL;


export class QueryResultError {
  constructor(
    public status: number,
    public detail: any
  ) {}
}


export const queryAPI = async <ResponseData = any>({
  url,
  method = 'GET',
  withAuth = false,
  data = null
}: Params ): Promise< ResponseData | QueryResultError > => {

  const headers = new Headers({ "Content-type": 'application/json' });

  if (withAuth) {
    const { key, value } = withAuth;
    headers.append( key, value );
  }

  const response = await fetch( `${baseUrl}/${url}`, {
    method,
    headers,
    body: JSON.stringify(data)
  });

  const result: ResponseData | any = await response.json();

  if ( response.ok ) return result;

  return new QueryResultError( response.status, result );
};
