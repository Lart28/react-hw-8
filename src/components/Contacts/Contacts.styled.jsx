import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  padding: 5px 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  border: 1px solid red;
  background-color: white;
  color: red;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  &:hover {
    color: white;
    background-color: red;
    cursor: pointer;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 25px;
  width: 33.33%;
  &: nth-of-type(1) {
    font-size: 22px;
    word-wrap: break-word;
  }
  &: nth-of-type(2) {
    font-size: 16px;
  }
`;

export const List = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;
  flex-direction: column;
  & li {
    display: flex;
    height: 60px;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    text-align: center;
    &: nth-of-type(even) {
      background-color: #0bc5ea0f;
    }
  }
`;
