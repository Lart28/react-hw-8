import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  width: 75%;
  @media (min-width: 500px) {
    width: 35%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #0bc5ea;
  margin-left: 6px;
`;
