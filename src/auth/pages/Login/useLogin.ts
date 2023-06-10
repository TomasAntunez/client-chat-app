import { useState, useEffect } from 'react';
import { ValidationError } from 'yup';

import { LoginScheme } from '../../types';
import { loginSchema } from '../../validators';

import { useAlert } from '../..';


const initialState: LoginScheme = {
  email: '',
  password: '',
  rememberme: true
};

export const useLogin = () => {

  const { showError } = useAlert();

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

    try {
      const cleanData = await loginSchema.validate(formData);
      console.log(cleanData);

    } catch (error) {
      if ( error instanceof ValidationError ) {
        if (error.message === 'required') {
          showError('Both fields are required');
          return
        }
        showError('The email or the password are incorrect');
        return
      }
      showError('There was a mistake, try again later');
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
