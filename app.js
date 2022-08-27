const express = require("express");
const app = express();
const port = 3000;

// Goi ejs

app.set("view engine", "ejs");

// Đường dẫn tĩnh
app.use(express.static('public'));

// Goi Control

app.use('/', require('./configs/Controls'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

