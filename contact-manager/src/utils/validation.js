export function isValidEmail(email) {
    // Allows letters, numbers, dots, underscores, and hyphens before @
    // Forbids %, spaces, and other unsafe characters
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}


export function isDuplicateEmail(email, contacts) {
    return contacts.some(contact => contact.email === email);
}
