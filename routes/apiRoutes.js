const path = require("path");
const router = require("express").Router();
const { v4: uuid4 } = require("uuid");
const notes = require("../db/db.json");
const fs = require("fs");

// GET /api/notes
router.get("/notes", (req, res) => {
  res.json(notes);

  return console.log("success!");
});

router.get("/notes", (req, res) => {
  let note;
  for (let i = 0; i < notes.length; i++) {
    if (req.params.id === notes[i].id) {
      note = notes[i];
      res.json(note);
      return console.log("success!");
    }
  }
});

router.post("/notes", (req, res) => {
  const { title } = req.body;
  const { text } = req.body;
  const newNote = {
    title,
    text,
    id: uuid4(),
  };
  notes.push(newNote);
  fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});

router.delete("/notes/:id", (req, res) => {
  //asynchronously readFile with FS
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500);
    }
    const notes = JSON.parse(data);
    const filterNotes = notes.filter((note) => {
      // Array.filter uses a callback that returns true or false to determine whether to not to keep elements in the new array
      if (note.id == req.params.id) {
        return false;
      } else {
        return true;
      }
    });

    fs.writeFile("./db/db.json", JSON.stringify(filterNotes), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(notes);
        return res.status(200);
      }
    });
  });
});

module.exports = router;
