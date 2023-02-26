import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormEl, Label, Title, Input, Button } from './ContactForm.Styled';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');

  // state = {
  //   name: '',
  //   tel: '',
  // };

  const onNameChange = event => {
    // const name = event.target.value;
    //     this.setState({ name: name });
    // };
    setName(event.target.value);
  };

  const onTelChange = event => {
    // const tel = event.target.value;
    // this.setState({ tel: tel });
    setTel(event.target.value);
  };

  const onAddClick = event => {
    event.preventDefault();

    const contact = {
      name,
      tel,
    };

    onAddContact(contact);
    reset();
  };

  const reset = () => {
    // this.setState({
    //   name: '',
    //   tel: '',
    // });
    setName('');
    setTel('');
  };

  return (
    <FormEl onSubmit={onAddClick}>
      <Label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onNameChange}
          value={name}
        />
        <Title>Number</Title>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={tel}
          onChange={onTelChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormEl>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
