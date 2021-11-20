const path = require("path");
const router = require("express").Router();
const fs = require("fs");
const noteData = require("../db/db.json");

// GET Routes
// Index/Starting page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Notes page
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Saved notes on notes page
router.get("/api/notes", (req, res) => res.json(noteData));

module.exports = router;
