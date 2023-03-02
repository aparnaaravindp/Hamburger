export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
  passwordConfirmation: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (data: IRegisterData) => Promise<void>;
  userLogin: (data: ILoginData) => Promise<void>;
  userLogout: () => void;
}

export interface IUserRegisterResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserLoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IUserAutoLoginResponse {
  email: string;
  id: string;
  name: string;
}


