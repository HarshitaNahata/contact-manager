# 📇 Contact Manager

A full-stack Contact Manager application with a modern, responsive UI and persistent cloud storage. Easily add, view, update, and delete contacts—all powered by a robust MERN stack and deployed for seamless access online for users.

---

## 🔗 Live Demo

- **Frontend:** [https://contact-manager-kohl-pi.vercel.app/](https://contact-manager-kohl-pi.vercel.app/)
- **Backend API:** [https://contact-manager-fnzt.onrender.com/api/contacts](https://contact-manager-fnzt.onrender.com/api/contacts)
- **Demo Video:** [Google Drive Link](https://drive.google.com/file/d/1Eo8Qc1f5P0yDHEi0KoYUZxn4y0Lq4mOV/view?usp=sharing)
- **GitHub Repo:** [https://github.com/HarshitaNahata/contact-manager](https://github.com/HarshitaNahata/contact-manager)

---

## 🧩 Technology Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React.js, Material UI (MUI)       |
| Backend    | Node.js, Express.js               |
| Database   | MongoDB Atlas, Mongoose           |
| Deployment | Vercel (frontend), Render (backend)|

---

## 💡 Why This Stack?

- **Rapid Development:** React and Express enable fast, modular coding.
- **Scalable Architecture:** Easily extend features or scale with user growth.
- **Interactive UI:** Material UI provides a polished, responsive interface.
- **Flexible Data:** MongoDB stores contact data as flexible documents.
- **Easy Deployment:** Vercel and Render automate builds and hosting.

---

## 🔧 Core Features

- **Full CRUD:** Create, read, update, and delete contacts.
- **Validation:** Checks for valid email format and required fields.
- **Duplicate Handling:** Prevents duplicate email entries.
- **Responsive UI:** Works smoothly on desktop and mobile.
- **Cloud Database:** All data is stored securely in MongoDB Atlas.

---

## 🚀 Getting Started

### 1. **Clone the Repository**
git clone https://github.com/HarshitaNahata/contact-manager
cd contact-manager


### 2. **Setup Backend**
cd contact-manager-backend
npm install

Create a .env file with your MongoDB URI:
MONGO_URI=your_mongodb_atlas_connection_string
npm start


### 3. **Setup Frontend**
cd ../contact-manager-frontend
npm install

Update API_URL in your code if needed
npm start


### 4. **Access the App**
- Open [http://localhost:3000](http://localhost:3000) (or the deployed URL above).

---

## 📝 Usage Instructions

1. **Add Contact:** Fill the form and submit to add a new contact.
2. **View Contacts:** All contacts are listed on the main page.
3. **Edit Contact:** Click the edit icon, update details, and save.
4. **Delete Contact:** Click the delete icon to remove a contact.

---

## 🎯 Challenges Faced & Solutions

| Challenge                | Solution                                               |
|--------------------------|-------------------------------------------------------|
| CORS Issues              | Used Express CORS middleware for cross-origin requests|
| MongoDB `_id` Handling   | Carefully mapped `_id` for update/delete operations   |
| State Debugging in React | Used props/state logs to trace data flow              |
| Deployment Configs       | Matched environment variables and URLs for each env   |

---

## 📹 Demo Video

Watch the full workflow (Create, Read, Update, Delete) and stack explanation here:  
[Demo Video on Google Drive](https://drive.google.com/file/d/1Eo8Qc1f5P0yDHEi0KoYUZxn4y0Lq4mOV/view?usp=sharing)

---

## 🙌 Credits

Developed by [Harshita Nahata](https://github.com/HarshitaNahata)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
