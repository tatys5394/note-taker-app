const path = require("path");
const router = require("express").Router();
const { v4: uuid4 } = require("uuid");
const notes = require("../db/db.json")

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

router.delete("/api/notes/:id", (req, res) => {
  for (let i = 0; i < notes.length; i++) {
    if (req.params.id === notes[i].id) {
      note.splice(i, 1);
      console.log("note deleted!");
      res.status(200);
      fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
        if (err) {
          console.log(err);
        } else {
          res.json(notes);
        }
        return;
      });
    }
  }
});

module.exports = router;