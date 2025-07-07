import React, { useState, useEffect } from 'react';
import { isValidEmail, isDuplicateEmail } from '../utils/validation';

function ContactForm({ addContact, editContact, contactToEdit, contacts, clearEdit }) {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (contactToEdit) {
            setContact(contactToEdit);
        } else {
            setContact({
                firstName: '',
                lastName: '',
                address: '',
                email: '',
                phone: ''
            });
        }
    }, [contactToEdit]);

    const handleChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!isValidEmail(contact.email)) {
            setError('Invalid email format.');
            return;
        }
        if (!contactToEdit && isDuplicateEmail(contact.email, contacts)) {
            setError('Email already exists.');
            return;
        }
        setError('');
        if (contactToEdit) {
            editContact(contact);
        } else {
            addContact(contact);
        }
        setContact({
            firstName: '',
            lastName: '',
            address: '',
            email: '',
            phone: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
            <input
                name="firstName"
                placeholder="First Name"
                value={contact.firstName}
                onChange={handleChange}
                required
            />
            <input
                name="lastName"
                placeholder="Last Name"
                value={contact.lastName}
                onChange={handleChange}
                required
            />
            <input
                name="address"
                placeholder="Address"
                value={contact.address}
                onChange={handleChange}
                required
            />
            <input
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={handleChange}
                required
                type="email"
            />
            <input
                name="phone"
                placeholder="Phone Number"
                value={contact.phone}
                onChange={handleChange}
                required
            />
            <button type="submit">{contactToEdit ? 'Update' : 'Add'} Contact</button>
            {contactToEdit && (
                <button type="button" onClick={clearEdit} style={{ marginLeft: '1rem' }}>
                    Cancel
                </button>
            )}
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
}

export default ContactForm;
