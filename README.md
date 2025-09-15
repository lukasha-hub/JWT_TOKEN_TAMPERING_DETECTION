# 🔐 JWT Token Tampering Detection

This project demonstrates how to generate, display, and **manually test tampering of JWT tokens** in a secure web environment using **Node.js**, **Express**, and **Vanilla JavaScript**.

---

## 📌 Project Description

JWT (JSON Web Token) is a secure method for transmitting information between parties. This mini-project allows users to:

- Log in and generate a JWT token
- Manually view or modify the token (simulate tampering)
- Verify the token and access a protected welcome page
- Understand how JWT tampering is detected on the server

This project is built for **educational purposes** to demonstrate how JWT works and how token tampering can be detected on the server.

---

## 🧑‍💻 Developed By

- **Student 1:** Alok Singh - USN CS22097
- **Student 2:** Lukasha Bagde - USN CS22109

---

## 🚀 Features

- Simple **Login** page to generate a JWT token.
- Token is shown in a **textarea** so users can test tampering.
- Server-side verification of JWT tokens using **`jsonwebtoken`**.
- Protected route (`/welcome`) accessible only with a valid token.
- Responsive and user-friendly **UI with modern CSS** styling.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **JWT Library:** `jsonwebtoken`
- **Other Dependencies:** `cors`, `body-parser`

---

## 📂 Project Structure

jwt-token-tampering/
│
├── index.html # Main login page
├── welcome.html # Protected page shown after successful verification
├── styles.css # Styling file
├── server.js # Express backend server


---

## 🧪 How to Run Locally

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/jwt-token-tampering.git
cd jwt-token-tampering


### 2. Install Dependencies

Make sure you have **Node.js** installed.


### 3. Start the Server


Server will start at:  
📍 `http://localhost:5000`

### 4. Open in Browser

Visit:  
🌐 `http://localhost:5000`

Try logging in with **any username and password** to generate a token, then modify the token manually and test verification.

## ⚠️ Notes

- The server signs tokens using a hardcoded secret (`mysecretkey`). In production apps, this should be stored securely in `.env`.
- The login accepts any username/password for demo purposes (no database integration).
- Token expires in **5 minutes**.

---

## 📃 License

This project is open source and free to use for educational purposes.

---

## 🙌 Acknowledgements

Special thanks to all mentors and professors who guided us during this project.

---

