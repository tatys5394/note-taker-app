const path = require("path");
const router = require("express").Router();
const { v4: uuid4 } = require("uuid");
const notes = require("../db/db.json")
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
  fs.writeFileAsync("./db/db.json", JSON.stringify(notes), (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json(notes);
    }
  });
});

router.delete("/notes/:id", (req, res) => {
  console.log("note deleted!");
  for (let i = 0; i < notes.length; i++) {
    if (req.params.id === notes[i].id) {
      notes.splice(i, 1);
      //asynchronously readFile with FS
      fs.readFileAsync("./db/db.json",)
      //That will give you an array of JSON objects

      //parse array to have an array of JS object

      //use JS filter method to exclude the object with a certain ID
      //let id = req.params.id



      res.status(200);
      fs.writeFileAsync("./db/db.json", JSON.stringify(notes), (err) => {
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