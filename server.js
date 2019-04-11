const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

/* html files */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, "./", "index.html")));

app.get("/index.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "index.html"))
);

app.get("/about1.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "about1.html"))
);

app.get("/about2.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "about2.html"))
);

app.get("/about3.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "about3.html"))
);

app.get("/about4.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "about4.html"))
);

app.get("/getinvolved.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "getinvolved.html"))
);

app.get("/signup.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "signup.html"))
);

app.get("/contact.html", (req, res) =>
  res.sendFile(path.join(__dirname, "./", "contact.html"))
);

/* images */
app.use('/img',express.static(__dirname +'/img'));

/* css files */
app.use('/css',express.static(__dirname +'/css'));

/* js files */
app.use('/js',express.static(__dirname +'/js'));


app.listen(port, () => console.log(`App listening on port ${port}! Go to 'http://localhost:3000/'`))
