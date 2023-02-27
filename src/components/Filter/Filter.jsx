import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Title, Input } from './Filter.Styled';
import { searchContact } from 'redux/contactSlice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contactsData.filter);
  const onSearch = event => {
    dispatch(searchContact(event.target.value));
  };

  return (
    <div>
      <Title>Find contacts by name:</Title>
      <Input type="text" name="filterTerm" value={filter} onChange={onSearch} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
