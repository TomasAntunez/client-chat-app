import { queryAPI, backendRoutes } from '../';


export const getMessages = async (userUid: string) => {
  return await queryAPI({
    url: `${backendRoutes.MESSAGES}/${userUid}`,
    method: 'GET',
    withAuth: true
  })
}
