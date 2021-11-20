const path = require("path");
const router = require("express").Router();
const fs = require("fs");

// GET Routes
// Index/Starting page
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Notes page
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
