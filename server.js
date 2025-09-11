const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

const SECRET_KEY = "mysecretkey";

// Login route → generate token
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Username and password required" });

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "5m" });
  res.json({ token });
});

// Verify token route
app.post("/welcome", (req, res) => {
  const { token } = req.body;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Token valid", username: decoded.username });
  } catch (err) {
    res.status(401).json({ error: "Token invalid or tampered!" });
  }
});

// Serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Serve welcome.html
app.get("/welcome.html", (req, res) => {
  res.sendFile(path.join(__dirname, "welcome.html"));
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
