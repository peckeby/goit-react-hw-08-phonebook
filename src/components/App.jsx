import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useAuth } from 'hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import UserMenu from './UserMenu/UserMenu';
import Layout from './Layout/Layout';

const ContactsPage = lazy(() => import('../pages/contacts/ContactsPage'));
const WelcomePage = lazy(() => import('../pages/welcomePage/WelcomePage'));
const LoginPage = lazy(() => import('../pages/login/LoginPage'));
const RegisterPage = lazy(() => import('../pages/register/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/menu"
          element={
            <PrivateRoute redirectTo="/login" component={<UserMenu />} />
          }
        />
      </Route>
    </Routes>
  );
  //
};
