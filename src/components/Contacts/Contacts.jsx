import { useDispatch } from 'react-redux';
import { Item, Title, Button, Span } from './Contacts.Styled';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export function Contacts() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactsData.filter);
  const contacts = useSelector(state => state.contactsData.contacts);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const filterContact = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filterContact.map(({ name, id, tel }) => {
        return (
          <Item key={id}>
            <Span />
            <Title>
              {name}: {tel}
            </Title>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Item>
        );
      })}
    </ul>
  );
}
