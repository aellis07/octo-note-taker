const express = require("express");
const htmlRoutes = require("./routes/index.js");

const app = express();

const PORT = 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static frontend public folder
app.use(express.static("public"));

// Routes to both index.html and note.html
app.use(htmlRoutes);
