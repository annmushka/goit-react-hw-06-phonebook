import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // state = {
  //   contacts: [],
  //   filter: '',
  // };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (localData) {
      setContacts(localData);
    }
  }, []);

  useEffect(() => {
    if (contacts === 0) {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  // componentDidMount() {
  //   const localData = JSON.parse(localStorage.getItem(LOCAL_KEY));
  //   if (localData) {
  //     this.setState({ contacts: localData });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem(LOCAL_KEY, JSON.stringify(this.state.contacts));
  //   }
  // }

  const addContact = contacts => {
    if (contacts.some(el => el.name === contacts.name)) {
      alert(`${contacts.name} is already in contacts!`);
      return;
    }
    const contactsList = { id: nanoid(), ...contacts };
    setContacts([contactsList, ...contacts]);
  };
  // this.setState({
  //   contacts: [contactsList, ...this.state.contacts],
  // });

  const searchContact = event => {
    // const value = event.target.value;
    // this.setState({
    //   filter: value,
    // });
    setFilter(event.target.value);
  };

  const deleteContact = id => {
    // this.setState({
    //   contacts: this.state.contacts.filter(el => el.id !== id),
    // });
    setContacts(contacts.filter(el => el.id !== id));
  };

  const filterContact = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onSearch={searchContact} />
        <Contacts contacts={filterContact} onDelete={deleteContact} />
      </div>
    </>
  );
};
