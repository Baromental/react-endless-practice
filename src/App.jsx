import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { Layout } from 'components/Layout';
import { Preloader } from 'components/Preloader';
import { Contacts, Home, Login, NotFound, Register } from 'pages';
import './index.css';
import { refreshThunk } from './redux/auth/operation';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import { selectIsRefresh } from './redux/auth/slice';

function App() {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefresh ? (
    <Preloader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
