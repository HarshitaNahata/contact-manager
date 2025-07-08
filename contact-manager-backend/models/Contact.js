const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: {
        type: String,
        required: true,
        match: [/^\d+$/, 'Phone number must contain only digits.']
    }
});

module.exports = mongoose.model('Contact', contactSchema);
