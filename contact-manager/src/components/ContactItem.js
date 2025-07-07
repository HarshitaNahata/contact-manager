import React from 'react';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ContactItem({ contact, onEdit, onDelete }) {
    return (
        <ListItem
            divider
            secondaryAction={
                <>
                    <IconButton edge="end" aria-label="edit" onClick={() => onEdit(contact)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={() => onDelete(contact.email)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            }
        >
            <ListItemText
                primary={`${contact.firstName} ${contact.lastName}`}
                secondary={
                    <>
                        {contact.address}<br />
                        {contact.email}<br />
                        {contact.phone}
                    </>
                }
            />
        </ListItem>
    );
}

export default ContactItem;
