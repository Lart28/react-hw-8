import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchCurrentUser } from '../redux/userOperations';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from './PublicRoute';
import { getIsRefreshing } from '../redux/selectors';

const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('../Pages/Login'));
const Contacts = lazy(() => import('../Pages/Phonebook'));
const Register = lazy(() => import('../Pages/Register'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/' element={<PublicRoute />} restricted>
            <Route path='/signup' element={<Register />} />
          </Route>
          <Route path='/' element={<PublicRoute />} restricted>
            <Route path='/login' element={<Login />} />
          </Route>
          <Route path='/' element={<PrivateRoute />}>
            <Route path='/contacts' element={<Contacts />} />
          </Route>
        </Route>
      </Routes>
    )
  );
}
