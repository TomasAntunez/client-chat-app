import { boolean, object, ObjectSchema, string } from 'yup';

import { UserLogin } from '../types';


export const loginSchema: ObjectSchema<UserLogin> = object({
  rememberme: boolean().required(),
  password: string()
    .required('The password is required')
    .min(3, 'The password must be valid')
    .max(30, 'The password must be valid'),
  email: string()
    .trim()
    .required('The email is required')
    .max(30, 'The email must be less than 30 characters')
    .email('The email must be valid')
    .lowercase()
});
