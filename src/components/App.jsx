import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { Toaster } from 'react-hot-toast';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Box from './Box';
import { Heading, MainHeading } from './Headings/Headings.styled';
import NotificationText from './NotificationText';

const App = () => {
  const contacts = useSelector(getContacts);

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
              <Filter />
              <ContactList />
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
