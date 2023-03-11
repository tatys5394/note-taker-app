const path = require('path');
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(require('./routes'));
app.use(express.static('public'));

app.listen(PORT, () => console.log(`port running on http://localhost:${PORT}`));
