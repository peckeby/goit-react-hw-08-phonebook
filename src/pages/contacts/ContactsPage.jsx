import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts, getIsLoading } from 'redux/selectors';
import { GlobalStyle } from 'components/GlobalStyles';

const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));
const Section = lazy(() => import('components/Section/Section'));
const ContactList = lazy(() => import('components/ContactList/ContactList'));
const SearchBar = lazy(() => import('components/SearchBar/SearchBar'));

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Your contacts">
        <ContactForm />
        {contacts.length > 0 && loading === false && (
          <>
            <SearchBar />
            <ContactList />
          </>
        )}
        {contacts.length === 0 && loading === false && (
          <h2>You don't have any contacts for now</h2>
        )}
        {loading && <h3>Loading...</h3>}
      </Section>
      <GlobalStyle />
    </>
  );
}
