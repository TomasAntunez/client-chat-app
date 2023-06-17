import { queryAPI, reportError, QueryResultError, ResponseError } from '..';
import { UserLogin, LoginResponse, LoginResponseOk } from '../types';


export const authenticateUser = async (
  userLoginData: UserLogin
): Promise< LoginResponseOk | ResponseError > => {
  try {
    const result = await queryAPI<LoginResponse>({
      url: 'auth/login',
      method: 'POST',
      data: userLoginData
    });
    
    if ( result instanceof QueryResultError ) return {
      ok: false,
      msg: 'The email or the password are incorrect'
    }

    return {
      ok: true,
      result
    };

  } catch (error) {
    return reportError(error);
  }
};
