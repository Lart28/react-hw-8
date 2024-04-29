import { useLocation } from 'react-router-dom';
import { StyledLink, AuthMenuCover } from './Auth.styled';

const AuthMenu = () => {
  const location = useLocation();
  return (
    <AuthMenuCover>
      <StyledLink to='/signup' state={{ from: location }}>
        Sign Up
      </StyledLink>
      <StyledLink to='/login' state={{ from: location }}>
        Log In
      </StyledLink>
    </AuthMenuCover>
  );
};

export default AuthMenu;
