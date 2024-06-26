import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/selectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to='/login' />;
}
