import React from 'react';

function ContactItem({ contact, onEdit, onDelete }) {
    return (
        <li style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            marginBottom: '1rem',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div>
                <strong>{contact.firstName} {contact.lastName}</strong><br />
                {contact.address}<br />
                {contact.email}<br />
                {contact.phone}
            </div>
            <div>
                <button onClick={() => onEdit(contact)} style={{ marginRight: '0.5rem' }}>Edit</button>
                <button onClick={() => onDelete(contact.email)}>Delete</button>
            </div>
        </li>
    );
}

export default ContactItem;
