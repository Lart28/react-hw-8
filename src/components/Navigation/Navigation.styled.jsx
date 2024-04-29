import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  font-size: 12px;
@media (min-width: 768px) {
  flex-direction: row-reverse;
  gap: 20px;
  align-items: center;
}

/* Стилі для десктопних пристроїв */
@media (min-width: 1024px) {`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  display: flex;
  justify-content: center;
  color: #0bc5ea;
  @media (min-width: 768px) {
    font-size: 30px;
    justify-content: start;
    display: flex;
    align-items: center;
}
@media (min-width: 1024px) {
  font-size: 40px;
`;

export const StyledContacts = styled(NavLink)`
  position: absolute;
  top: 19px;
  left: 0px;
  text-decoration: none;
  font-size: 18px;
  color: #0bc5ea;
  font-weight: 600;
  @media (min-width: 768px) {
    position: static;
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Container = styled.div`
  padding: 0px 15px;
  & hr {
    margin: 0;
    position: absolute;
    top: 70px;
    width: 100%;
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 70px;
`;

export const StyledHeader = styled.header`
  position: fixed;
  width: calc(100% - 30px);
  height: 70px;
  background-color: rgba(255, 255, 255, 1);
  z-index: 3;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
