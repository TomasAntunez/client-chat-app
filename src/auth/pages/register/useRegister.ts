import { useState } from 'react';
import { ValidationError } from 'yup';

import { RegisterScheme } from '../../types';
import { registerScheme } from '../../validators';
import { useAlert } from '../..';


const initialState: RegisterScheme = {
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
}

export const useRegister = () => {

  const { showError } = useAlert();

  const [ formData, setFormData ] = useState<RegisterScheme>(initialState);


  const handleChange = (
    { target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData , [name]: value });
  };


  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    let cleanData: RegisterScheme;

    try {
      cleanData = await registerScheme.validate( formData );
      
    } catch (error) {
      if (error instanceof ValidationError) {
        
        if (error.message === 'required' ) {
          showError('All fields are required');
          return;
        }
        if (error.message === 'email-not-valid') {
          showError('The email must be valid');
          return;
        }
        showError(error.message);
        return;
      }
      
      showError('There was a mistake');
      return
    }

    
  }


  return {
    formData,
    handleChange,
    handleSubmit
  };
};