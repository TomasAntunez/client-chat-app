import { queryAPI, ResponseError } from '..';
import { UserLogin } from '../types';


type Result = {
  data?: any;
  error?: string;
}


export const authenticateUser = async ( data: UserLogin ): Promise<Result> => {
  try {
    return {
      data: await queryAPI({ url: 'auth/login', method: 'POST', data })
    }
  } catch (error) {
    if ( error instanceof ResponseError ) {
      return { error: 'The email or password is wrong' }
    }
    return { error: 'There was a mistake' };
  }
};
