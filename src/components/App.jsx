import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  filterItem,
  getContacts,
  getFilter,
} from 'redux/contactsSlice';
import toast, { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './Box';
import { Heading, MainHeading } from './Headings/Headings.styled';
import NotificationText from './NotificationText';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    toast('Bye... Deleted contact', {
      icon: '😢',
    });
  };

  const handleFilter = e => {
    dispatch(filterItem(e.target.value.toLocaleLowerCase()));
  };

  const filterContacts = () =>
    contacts.filter(({ name }) => name.toLocaleLowerCase().includes(filter));

  return (
    <Box py={5} fontFamily="body" as="main">
      <MainHeading>Phonebook</MainHeading>
      <Box maxWidth="480px" my={0} mx="auto" px={4} borderRadius="middle">
        <Box
          px={4}
          py={5}
          mb={5}
          boxShadow="card"
          borderRadius="normal"
          bg="bgDark"
        >
          <Heading>New contact</Heading>
          <ContactForm />
        </Box>

        <Box px={5} py={5} borderRadius="normal" bg="bgDark" boxShadow="card">
          <Heading>Contacts</Heading>
          {contacts.length > 0 ? (
            <>
              <Filter value={filter} onChange={handleFilter} />
              <ContactList
                values={filterContacts()}
                onDelete={handleDeleteContact}
              />
            </>
          ) : (
            <NotificationText message="There are no contacts" />
          )}
        </Box>
        <Toaster
          toastOptions={{
            style: {
              border: '1px solid #00DAC5',
              borderRadius: '10px',
              background: '#121212',
              padding: '16px',
              color: '#00DAC5',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default App;
