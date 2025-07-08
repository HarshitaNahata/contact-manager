const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Email contains invalid characters or format.'
        ]
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d+$/, 'Phone number must contain only digits.']
    }
});

module.exports = mongoose.model('Contact', contactSchema);
