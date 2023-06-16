import { boolean, object, ObjectSchema, string, setLocale } from 'yup';

import { LoginScheme } from '../types';


setLocale({
  mixed: {
    required: 'required'
  }
});


export const loginSchema: ObjectSchema<LoginScheme> = object().shape({
  rememberme: boolean().required(),
  password: string()
    .required()
    .min(3)
    .max(30),
  email: string()
    .trim()
    .required()
    .min(3)
    .max(30)
    .email()
    .lowercase()
});
