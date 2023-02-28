/* eslint-disable react/jsx-no-useless-fragment */
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../providers/UserContext/UserContext';

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  return <>{user ? <Outlet /> : <Navigate to='/' />}</>;
};
