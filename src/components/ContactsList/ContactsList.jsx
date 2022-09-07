import { useSelector } from 'react-redux';
import {
  getContactsList,
  useDeleteContactMutation,
  getFilterValue,
} from 'redux/contactApi';
import { ContactList, Item, Contact, Button } from './ContactList.styled';

export const ContactsList = () => {
  const items = useSelector(getContactsList);
  const filter = useSelector(getFilterValue);
  const [deleteContact] = useDeleteContactMutation();
  //------------ filter ------------------------
  const findQuery = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const findContacts = filter ? findQuery : items;
  //------------- delete -------------------
  const handleDeleteContact = contactId => {
    console.log(contactId);

    deleteContact(contactId);
  };

  return (
    <ContactList>
      {findContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact>{name}: </Contact>
          <Contact>{number} </Contact>
          <Button type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ContactList>
  );
};
