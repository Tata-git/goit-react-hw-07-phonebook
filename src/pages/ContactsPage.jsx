import ContactsForm from 'components/ContactsForm';
import { useFetchContactsQuery } from 'redux/contactApi';

export const ContactsPage = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      <ContactsForm />
    </div>
  );
};
