import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const API_URL = 'http://localhost:5000/api/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch contacts from backend when component mounts
  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch contacts');
        return res.json();
      })
      .then(data => {
        setContacts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Add a new contact (POST)
  const addContact = contact => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to add contact');
        return res.json();
      })
      .then(newContact => setContacts([...contacts, newContact]))
      .catch(err => setError(err.message));
  };

  // Edit a contact (PUT)
  const editContact = updatedContact => {
    fetch(`${API_URL}/${updatedContact._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedContact)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to update contact');
        return res.json();
      })
      .then(newContact => {
        setContacts(
          contacts.map(c => (c._id === newContact._id ? newContact : c))
        );
        setContactToEdit(null);
      })
      .catch(err => setError(err.message));
  };

  // Delete a contact (DELETE)
  const deleteContact = id => {
    fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to delete contact');
        return res.json();
      })
      .then(() => {
        setContacts(contacts.filter(c => c._id !== id));
        if (contactToEdit && contactToEdit._id === id) setContactToEdit(null);
      })
      .catch(err => setError(err.message));
  };

  const handleEdit = contact => setContactToEdit(contact);
  const clearEdit = () => setContactToEdit(null);

  if (loading) return <div>Loading contacts...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

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
          onDelete={contact => deleteContact(contact._id)}
        />
      </div>
    </div>
  );
}

export default App;
