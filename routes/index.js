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

//Saved notes from db
router.get("/api/notes", (req, res) => {
  fs.readFile(
    "/Users/Tony/Desktop/bootcamp homework/octo-note-taker/db/db.json",
    "utf8",
    (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    }
  );
});

// POST
router.post("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
