import { boolean, object, ObjectSchema, string } from 'yup';

import { UserLogin } from '../types';


export const loginSchema: ObjectSchema<UserLogin> = object().shape({
  rememberme: boolean().required(),
  password: string()
    .required('required')
    .min(3)
    .max(30),
  email: string()
    .trim()
    .required('required')
    .min(3)
    .max(30)
    .email()
    .lowercase()
});
