import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/userOperations';
import * as yup from 'yup';
import {
  Button,
  Error,
  Forma,
  Label,
  StyledField,
} from './RegistrationForm.styled';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(signUp(values));
    resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const schema = yup.object().shape({
    name: yup.string().max(16).required(),
    email: yup.string().required(),
    password: yup.string().min(8).max(16).required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ values, handleChange }) => (
        <Forma>
          <Label name='name'>
            <FaUserCircle />
            <StyledField
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              placeholder='Name'
            />
            <Error name='name' component='div' />
          </Label>
          <Label name='email'>
            <IoIosMail />
            <StyledField
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='example@mail.com'
            />
            <Error name='email' component='div' />
          </Label>
          <Label>
            <RiLockPasswordLine />
            <StyledField
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              placeholder='Password'
            />
            <Error name='password' component='div' />
          </Label>
          <Button type='submit'>Register</Button>
        </Forma>
      )}
    </Formik>
  );
};

export default RegistrationForm;
