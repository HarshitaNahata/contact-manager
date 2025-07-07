export function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

export function isDuplicateEmail(email, contacts) {
    return contacts.some(contact => contact.email === email);
}
