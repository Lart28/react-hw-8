import React from 'react';
import { nanoid } from 'nanoid';
import { Forma, Button, Label, Error } from './Form.styled';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOperations';
import { RiContactsBook2Fill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';

const nameId = nanoid();
const telId = nanoid();
const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().max(16).required(),
  number: yup.string().min(3).max(16).required(),
});

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const handleSubmit = (values, { resetForm }) => {
    const contactNames = contacts.map(contact => contact.name);
    contactNames.includes(values.name)
      ? alert(`${values.name} is already in contacts.`)
      : dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Forma>
        <Label htmlFor={nameId}>
          <RiContactsBook2Fill />
          <Field
            type='text'
            name='name'
            id={nameId}
            placeholder={'Enter name'}
          />
          <Error name='name' component='div' />
        </Label>
        <Label htmlFor={telId}>
          <FaPhoneAlt />
          <Field
            type='tel'
            name='number'
            id={telId}
            placeholder={'Enter phone number'}
          />
          <Error name='number' component='div' />
        </Label>
        <Button type='submit'>Add contact</Button>
      </Forma>
    </Formik>
  );
};

export default Form;
