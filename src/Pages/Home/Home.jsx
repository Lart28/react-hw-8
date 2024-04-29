import { Image, StyledLink } from './Home.styled';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <Image src='https://pngicon.ru/file/uploads/2_49.png' alt='phonebook' />
      <h1>
        Welcome to your phonebook! Organize your
        {
          <StyledLink to='/contacts' state={{ from: location }}>
            contacts
          </StyledLink>
        }{' '}
        quickly and easily!
      </h1>
    </div>
  );
};
export default Home;
