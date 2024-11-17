import React, { useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === id ? updatedContact : contact)));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Contact Management</h1>
      <ContactForm addContact={addContact} />
      <ContactsTable
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
