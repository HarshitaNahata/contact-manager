import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);

  const addContact = contact => {
    setContacts([...contacts, contact]);
  };

  const editContact = updatedContact => {
    setContacts(contacts.map(c =>
      c.email === updatedContact.email ? updatedContact : c
    ));
    setContactToEdit(null);
  };

  const deleteContact = email => {
    setContacts(contacts.filter(c => c.email !== email));
    if (contactToEdit && contactToEdit.email === email) {
      setContactToEdit(null);
    }
  };

  const handleEdit = contact => {
    setContactToEdit(contact);
  };

  const clearEdit = () => {
    setContactToEdit(null);
  };

  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <ContactForm
          addContact={addContact}
          editContact={editContact}
          contactToEdit={contactToEdit}
          contacts={contacts}
          clearEdit={clearEdit}
        />
        <ContactList
          contacts={contacts}
          onEdit={handleEdit}
          onDelete={deleteContact}
        />
      </div>
    </div>
  );
}

export default App;
