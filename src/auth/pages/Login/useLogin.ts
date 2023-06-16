import { useState, useEffect } from 'react';
import { ValidationError } from 'yup';
import { useNavigate } from 'react-router-dom';

import { LoginScheme, RememberedUser } from '../../types';
import { loginSchema } from '../../validators';
import { useAuth } from '../../hooks';

import { useAlert, objLocalStorage, routes } from '../..';


const initialState: LoginScheme = {
  email: '',
  password: '',
  rememberme: false
};

export const useLogin = () => {

  const navigate = useNavigate();

  const { showError } = useAlert();
  const { login } = useAuth();

  const [ formData, setFormData ] = useState<LoginScheme>( initialState );

  const [ submitButtonDisabled ] = useState<boolean>( false );


  useEffect( () => {
    try {
      const { email, rememberme } = objLocalStorage.get<RememberedUser>( 'rememberedUser' );
      setFormData( formData => ({
        ...formData,
        email,
        rememberme
      }));
    } catch (error) {
      return;
    }
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
    _: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setFormData({
      ...formData,
      rememberme: checked
    });
  };


  const handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();

    let cleanData: LoginScheme;

    try {
      cleanData = await loginSchema.validate(formData);

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


    const { rememberme, email, password } = cleanData;
    
    try {
      if ( rememberme ) {
        const rememberedUser: RememberedUser = { email, rememberme };
        objLocalStorage.save( 'rememberedUser', rememberedUser );

      } else {
        objLocalStorage.remove( 'rememberedUser' )
      }
      
    } catch (error) {
      showError('There was a mistake, try again later');
    }
    

    const error = await login({ email, password });
    if (error) {
      showError(error);
      return;
    }

    navigate( `/${routes.CHAT}` );
  };

  return {
    formData,
    handleSubmit,
    handleChangeTextFields,
    handleChangeCheckbox,
    submitButtonDisabled
  }
};
