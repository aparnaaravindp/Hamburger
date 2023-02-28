/* eslint-disable import/no-extraneous-dependencies */
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterData } from '../../../providers/UserContext/@types';
import { UserContext } from '../../../providers/UserContext/UserContext';

const schema = yup
  .object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().required('Email é obrigatório'),
    password: yup
      .string()
      .matches(/(\d)/, 'Deve conter ao menos 1 número')
      .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
      .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
      .matches(/(\W|_)/, 'Deve conter no mínimum 1 caracter especial')
      .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres'),
    passwordConfirmation: yup
      .string()
      .oneOf(
        [yup.ref('password')],
        'Confirmação de senha deve ser igual a senha'
      )
      .required('Confirmação de senha é obrigatória'),
  })
  .required();

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(schema),
  });

  const submit: SubmitHandler<IRegisterData> = (data) => {
    userRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type='text'
        label='Nome'
        register={register('name')}
        error={errors.name}
      />
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
      <Input
        type='password'
        label='Confirmar Senha'
        register={register('passwordConfirmation')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
