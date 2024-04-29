import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/userOperations';
import * as yup from 'yup';
import { Button, Error, Forma, Label, StyledField } from './LogInForm.styled';
import { RiLockPasswordLine } from 'react-icons/ri';
import { IoIosMail } from 'react-icons/io';

const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  const initialValues = {
    email: '',
    password: '',
  };
  const schema = yup.object().shape({
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
          <Button type='submit'>Log In</Button>
        </Forma>
      )}
    </Formik>
  );
};

export default LogInForm;
