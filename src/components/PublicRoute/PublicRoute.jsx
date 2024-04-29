import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/selectors';

export default function PublicRoute(restricted = false) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to='/contacts' /> : <Outlet />;
}
