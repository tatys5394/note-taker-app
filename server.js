const path = require("path");
const express = require("express");
const router = require("express").Router();

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", require("./routes/htmlRoutes"));
// use this router vor all routes starting with /api
app.use("/api", require("./routes/apiRoutes"));

app.listen(PORT, () => console.log(`port running on http://localhost:${PORT}`));
