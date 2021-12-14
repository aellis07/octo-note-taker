const path = require("path");
const router = require("express").Router();
const fs = require("fs");

// GET Routes
// Index/Starting page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

//Saved notes from db
router.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST - posting new note
router.post("/api/notes", (req, res) => {
  // reading the notes already stored in the db
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, notes) => {
    if (err) throw err;
    // creating a notes object using JSON.parse
    notes = JSON.parse(notes);
    // assigning the note a default id value
    let noteID = 0;
    // creating a noteID that increments by 1
    notes.id = noteID;
    noteID++;
    // creating a new note object that includes the note id using the .concat method
    let note = { title: req.body.title, text: req.body.text, id: notes.id };
    let newNote = notes.concat(note);

    // Writing newNote to db.json
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      // Using JSON.stringify to pass newNote since writeFile only accepts strings
      JSON.stringify(newNote),
      (err, data) => {
        if (err) throw err;
        console.log(data);
        console.log(newNote);
        res.json(newNote);
      }
    );
  });
});

module.exports = router;
