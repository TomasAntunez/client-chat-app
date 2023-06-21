import { Params }  from '../types';


const baseUrl = process.env.REACT_APP_API_URL;


export class ResponseError {
  constructor(
    public status: number,
    public detail: any
  ) {}
}


export const queryAPI = async <ResponseData = any>({
  url,
  method = 'GET',
  withAuth = false,
  customHeaders = false,
  data = null
}: Params ): Promise< ResponseData > => {

  const headers = new Headers({ "Content-type": 'application/json' });

  if (withAuth) {
    const token = localStorage.getItem('token');
    if (!token) throw new ResponseError( 401, { msg: 'No token' } );
    headers.append('x-token', token);
  }

  if (customHeaders) {
    customHeaders.forEach( header => {
      headers.append( header[0], header[1] );
    });
  }

  let response: Response;

  if ( method === 'GET' ) {
    response = await fetch( `${baseUrl}/${url}`, {
      method,
      headers
    });
  } else {
    response = await fetch( `${baseUrl}/${url}`, {
      method,
      headers,
      body: JSON.stringify(data)
    });
  }

  const result: ResponseData = await response.json();

  if ( response.ok ) return result;

  throw new ResponseError( response.status, result );
};
