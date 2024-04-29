import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const Forma = styled(Form)`
  display: flex;
  gap: 17px;
  padding: 10px 20px;
  border: 2px solid #0bc5ea;
  border-radius: 6px;
  max-width: 250px;
  margin: 25px auto;
  flex-direction: column;
  @media (min-width: 768px) {
    max-width: none;
    width: 400px;
  }
`;
export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #0bc5ea;
  background-color: #0bc5ea;
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 5px;
  &:hover {
    color: #0bc5ea;
    background-color: white;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  display: flex;
  position: relative;
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  color: #0bc5ea;
  font-size: 16px;
  font-weight: 400;
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
      width: 100%;
      height: 40px;
      font-size: 16px;
    }
    @media (min-width: 1024px) {
      font-size: 20px;
    }
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: 40px;
  left: 23px;
  color: red;
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
    top: 55px;
  }
`;

export const StyledField = styled(Field)`
  margin-left: 5px;
`;
