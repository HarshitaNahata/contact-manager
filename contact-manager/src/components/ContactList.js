import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, onEdit, onDelete }) {
    if (contacts.length === 0) {
        return <p>No contacts found.</p>;
    }
    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.email}
                    contact={contact}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default ContactList;
