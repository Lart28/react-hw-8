import Contacts from '../../components/Contacts';
import { Title, Title2 } from 'components/App.styled';
import Form from 'components/Form';
import Filter from 'components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';
import { BeatLoader } from 'react-spinners';
import { FormCover } from './Phonebook.styled';

export default function Phonebook() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <FormCover>
        <Title>New Contact</Title>
        <Form />
      </FormCover>
      <FormCover>
        <Title2>Contacts</Title2>
        <Filter />
        {isLoading && !error && <BeatLoader color='#0bc5ea' />}
        <Contacts />
      </FormCover>
    </>
  );
}
