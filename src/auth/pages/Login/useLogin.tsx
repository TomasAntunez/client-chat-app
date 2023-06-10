import { useState, useEffect } from 'react';
import { ValidationError } from 'yup';

import { LoginScheme } from '../../types';
import { loginSchema } from '../../validators';


const initialState: LoginScheme = {
  email: '',
  password: '',
  rememberme: true
};

export const useLogin = () => {
  const [ formData, setFormData ] = useState<LoginScheme>( initialState );

  const [ submitButtonDisabled ] = useState<boolean>( false );


  useEffect( () => {
    const email = localStorage.getItem('email');
    if ( email ) {
      setFormData({ ...formData, email });
    }
    // eslint-disable-next-line
  }, []);


  const handleChangeTextFields = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleChangeCheckbox = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setFormData({
      ...formData,
      rememberme: checked
    });
  };

  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    console.log(formData)

    try {
      const cleanData = await loginSchema.validate(formData);
      console.log(cleanData);
    } catch (error) {
      if ( error instanceof ValidationError ) {
        console.log('is ValidationError')
        console.log(error.message);
        return
      }
      console.log(error);
      return
    }


    if ( formData.rememberme ) {
      localStorage.setItem( 'email', formData.email );
    } else {
      localStorage.removeItem( 'email' );
    }

    // TODO: send request
  };

  return {
    formData,
    handleSubmit,
    handleChangeTextFields,
    handleChangeCheckbox,
    submitButtonDisabled
  }
};
