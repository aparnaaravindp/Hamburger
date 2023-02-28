/* eslint-disable no-console */
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  IDefaultProviderProps,
  ILoginData,
  IRegisterData,
  IUser,
  IUserAutoLoginResponse,
  IUserContext,
  IUserLoginResponse,
  IUserRegisterResponse,
} from './@types';
import { api } from '../../services/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  const userAutoLogin = async () => {
    const token = localStorage.getItem('@TOKEN');
    const id = localStorage.getItem('@USERID');
    if (token) {
      try {
        const response = await api.get<IUserAutoLoginResponse>(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);

        navigate('/shop');
      } catch (error) {
        console.log(error);
        localStorage.removeItem('@TOKEN');
      }
    }
  };

  useEffect(() => {
    userAutoLogin();
  }, []);

  const userRegister = async (data: IRegisterData) => {
    try {
      const response = await api.post<IUserRegisterResponse>(`/users`, data);
      setUser(response.data.user);
      toast.success('Conta criada com sucesso!', { autoClose: 2000 });
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (data: ILoginData) => {
    try {
      setLoading(true);
      const response = await api.post<IUserLoginResponse>(`/login`, data);
      setUser(response.data.user);
      toast.success('Logado com sucesso!', { autoClose: 2000 });
      localStorage.setItem('@TOKEN', response.data.accessToken);
      localStorage.setItem('@USERID', response.data.user.id);
      navigate('/shop');
    } catch (error) {
      console.log(error);
      toast.error('e-mail ou senha inválidos', { autoClose: 2000 });
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{ loading, setLoading, user, userRegister, userLogin, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
