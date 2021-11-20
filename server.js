// =============================
// DEPENDENCIES
const express = require("express");
const htmlRoutes = require("./routes/index.js");

const app = express();

const PORT = process.env.PORT || 3001;
// ===============================
// MIDDLEWARES
// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static frontend public folder
app.use(express.static("public"));

// Routes to both index.html and note.html
app.use(htmlRoutes);

// ==============================
// SERVER-LISTENER
app.listen(PORT, () =>
    console.log(`App listening on PORT http://localhost:${PORT}`)
);
