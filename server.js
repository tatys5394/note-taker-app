const path = require('path');
const express = require("express");
const router = require("express").Router()

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

router.use("/api", require("./apiRoutes"));
router.use("/", require("./htmlRoutes"));



app.listen(PORT, () => console.log(`port running on http://localhost:${PORT}`));

module.exports = router;