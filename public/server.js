// DEPENDENCIES
const express = require("express");

// DATA
const todos = [
  {
    task: "Buy Soy Milk",
    priority: 3,
    complete: false,
  },
];

// APP/PORT
const app = express();
const PORT = process.env.PORT || 3001;

// MIDDLEWARE

// ROUTES
// create
// POST /api/todos - all the todos

// read
// GET /api/todos - all the todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});
// GET /api/todos/:index - one todo
app.get("/api/todos/:index", (req, res) => {
  const { index } = req.params;

  res.json(todos[Number(index)]);
});
// update
// PUT/api/todos/:index - one todo

// delete
// DELETE/api/todos/:index - one todo

// START THE SERVER
app.listen(PORT, () => console.log("port running on 3001"));
