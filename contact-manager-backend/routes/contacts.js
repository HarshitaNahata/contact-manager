const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// CREATE
router.post('/', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.status(201).json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

// READ ONE
router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Not found' });
    res.json(contact);
});

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!contact) return res.status(404).json({ error: 'Not found' });
        res.json(contact);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Contact deleted' });
});

module.exports = router;
