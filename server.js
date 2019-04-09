const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./", "index.html")));

app.get("/about1.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "about1.html"))
);

app.get("/about2.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "about2.html"))
);








app.listen(port, () => console.log(`App listening on port ${port}!`))
