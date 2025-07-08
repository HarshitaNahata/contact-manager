import React, { useState, useEffect } from 'react';
import { isValidEmail, isDuplicateEmail } from '../utils/validation';
import { TextField, Button, Paper, Stack, Typography } from '@mui/material';

function ContactForm({ addContact, editContact, contactToEdit, contacts, clearEdit }) {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        phone: ''
    });
    const [error, setError] = useState('');
    const [phoneError, setPhoneError] = useState('');

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
    const isValidPhone = (phone) => /^\d+$/.test(phone);

    const handleSubmit = e => {
        e.preventDefault();
        if (!isValidEmail(contact.email)) {
            setError('Invalid email format.');
            return;
        }
        if (!isValidPhone(contact.phone)) {
            setPhoneError('Phone number must contain only digits.');
            return;
        } else {
            setPhoneError('');
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
        <Paper sx={{ p: 3, mb: 3 }}>
            <form onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    {contactToEdit ? 'Edit Contact' : 'Add Contact'}
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        value={contact.firstName}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        value={contact.lastName}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Address"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        type="email"
                    />
                    <TextField
                        label="Phone Number"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                        fullWidth
                        error={!!phoneError}
                        helperText={phoneError}
                    />
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" type="submit">
                            {contactToEdit ? 'Update' : 'Add'}
                        </Button>
                        {contactToEdit && (
                            <Button variant="outlined" type="button" onClick={clearEdit}>
                                Cancel
                            </Button>
                        )}
                    </Stack>
                    {error && <Typography color="error">{error}</Typography>}
                </Stack>
            </form>
        </Paper>
    );
}

export default ContactForm;
