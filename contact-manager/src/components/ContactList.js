import React from 'react';
import ContactItem from './ContactItem';
import { List, Typography } from '@mui/material';

function ContactList({ contacts, onEdit, onDelete }) {
    if (contacts.length === 0) {
        return <Typography align="center" color="text.secondary">No contacts found.</Typography>;
    }
    return (
        <List>
            {contacts.map(contact => (
                <ContactItem
                    key={contact.email}
                    contact={contact}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </List>
    );
}

export default ContactList;
