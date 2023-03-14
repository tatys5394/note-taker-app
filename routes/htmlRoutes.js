const path = require("path");
const router = require("express").Router();
("/");
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  return console.log("success!");
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  return console.log("success!");
});

module.exports = router;
