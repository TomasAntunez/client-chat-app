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
  customHeaders = false,
  data = null
}: Params ): Promise< ResponseData > => {

  const headers = new Headers({ "Content-type": 'application/json' });

  if (customHeaders) {
    customHeaders.forEach( header => {
      const { key, value } = header;
      headers.append( key, value );
    });
  }

  const response = await fetch( `${baseUrl}/${url}`, {
    method,
    headers,
    body: JSON.stringify(data)
  });

  const result: ResponseData = await response.json();

  if ( response.ok ) return result;

  throw new ResponseError( response.status, result );
};
