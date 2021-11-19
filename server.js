const express = require("express");
const fs = require("fs");
const htmlRoutes = require("./routes/index.js");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(htmlRoutes);

// ==============================
// SERVER LISTENER
app.listen(PORT, () =>
    //-----Console log left for convenience of local use
    console.log(`App listening on PORT http://localhost:${PORT}`)
);
