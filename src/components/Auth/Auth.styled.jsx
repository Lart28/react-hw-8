import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: flex;
  border: none;
  background-color: white;
  align-items: stretch;
  cursor: pointer;
  color: #0bc5ea;
  font-weight: 600;
  &: hover {
    color: red;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #0bc5ea;
  font-weight: 600;
  border: 1px solid #0bc5ea;
  border-radius: 4px;
  padding: 5px 5px;
  width: 44px;
  display: block;
  text-align: center;
  @media (min-width: 768px) {
    width: 60px;
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    width: 80px;
    font-size: 18px;
  }
  &:hover,
  &:focus {
    color: white;
    background-color: #0bc5ea;
  }
  &:nth-of-type(1) {
    margin-right: 10px;
    background-color: #0bc5ea;
    color: white;
    @media (min-width: 768px) {
      margin-right: 15px;
    }
    &:hover,
    &:focus {
      color: #0bc5ea;
      background-color: white;
    }
  }
`;

export const UserMenuCover = styled.div`
  margin-top: 9px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const AuthMenuCover = styled.div`
  margin: 13px 0;
  display: flex;
`;
