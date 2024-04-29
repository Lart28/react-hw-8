import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/selectors';
import { AuthMenu, UserMenu } from '../Auth';
import { useLocation } from 'react-router-dom';
import {
  Nav,
  StyledLink,
  StyledContacts,
  Container,
  StyledMain,
  StyledHeader,
} from './Navigation.styled';
import { BeatLoader } from 'react-spinners';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const location = useLocation();
  return (
    <Container>
      <StyledHeader>
        <StyledLink to='/' state={{ from: location }}>
          Phonebook
        </StyledLink>
        <Nav>
          {isLoggedIn ? (
            <>
              <UserMenu />
              <StyledContacts to='/contacts' state={{ from: location }}>
                Contacts
              </StyledContacts>
            </>
          ) : (
            <AuthMenu />
          )}
        </Nav>
        <hr></hr>
      </StyledHeader>
      <StyledMain>
        <Suspense fallback={<BeatLoader color='#0bc5ea' />}>
          <Outlet />
        </Suspense>
      </StyledMain>
    </Container>
  );
};
export default Navigation;
