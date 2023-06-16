import { Params }  from '../types';
import { ResponseError } from '../custom';


const baseUrl = process.env.REACT_APP_API_URL;

export const queryAPI = async ({
  url,
  method = 'GET',
  withAuth = false,
  data = null
}: Params ) => {

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

  const result = await response.json();

  if ( response.ok ) {
    return result;
  }

  throw new ResponseError( result, response.status );
};
