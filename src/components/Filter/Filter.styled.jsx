import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: white;
  color: #0bc5ea;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 29px;
  }
  & input {
    display: block;
    border: 1px solid #0bc5ea;
    border-radius: 6px;
    min-width: 150px;
    height: 25px;
    @media (min-width: 768px) {
      min-width: none;
      width: 400px;
      height: 40px;
      font-size: 16px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;
