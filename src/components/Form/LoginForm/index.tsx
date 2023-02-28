/* eslint-disable import/no-extraneous-dependencies */
import { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

import Input from '../Input';
import { ILoginData } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';

const schema = yup
  .object({
    email: yup.string().required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatório'),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(schema),
  });
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginData> = (data) => {
    userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='email'
        label='Email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        type='password'
        label='Senha'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
