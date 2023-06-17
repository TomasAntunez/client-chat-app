import { boolean, object, ObjectSchema, string, ref, setLocale } from 'yup';

import { LoginScheme, RegisterScheme } from '../types';


setLocale({
  mixed: {
    required: 'required'
  }
});


export const loginScheme: ObjectSchema<LoginScheme> = object().shape({
  rememberme: boolean().required(),
  password: string().required()
    .min(3)
    .max(30),
  email: string().trim().required()
    .min(3)
    .max(30)
    .email()
    .lowercase()
});


export const registerScheme: ObjectSchema<RegisterScheme> = object().shape({
  repeatPassword: string().required()
    .oneOf( [ref('password') ], 'The passwords are not the same'),
  password: string().required()
    .min(6, 'The password must be at least 6 characters')
    .max(30, 'The password can have up to 30 characters'),
  email: string().trim().required()
    .min(3, 'email-not-valid')
    .max(30, 'email-not-valid')
    .email('email-not-valid')
    .lowercase(),
  name: string().trim().required()
    .min(2, 'The name is too short')
    .max(30, 'The name is too long')
});
