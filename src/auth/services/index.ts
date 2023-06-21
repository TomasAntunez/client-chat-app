import { queryAPI, backendRoutes } from '..';
import { UserLogin, LoginResponse, UserRegister } from '../types';


export const authenticateUser = async (userLoginData: UserLogin ): Promise<LoginResponse> => {
  return await queryAPI<LoginResponse>({
    url: `${backendRoutes.AUTH}/login`,
    method: 'POST',
    data: userLoginData
  });
};

export const createAccount = async ( userRegisterData: UserRegister ) => {
  return await queryAPI({
    url: `${backendRoutes.AUTH}/register`,
    method: 'POST',
    data: userRegisterData
  });
}

export const renewToken = async () => {
  return await queryAPI({
    url: `${backendRoutes.AUTH}/renew`,
    method: 'GET',
    withAuth: true
  });
};
