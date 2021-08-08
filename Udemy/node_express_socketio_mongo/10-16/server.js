const http = require("http");
const fs = require("fs");
const moment = require('moment')
const port = 3000;
const christmas = '2022-12-25'
console.log(moment(christmas).format('LL'))

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html"); // send the plain text to the browser

  let route = "./views/";
  switch (req.url) {
    case "/":
      route += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      route += "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-us":
      res.statusCode = 301; //relocated
      res.setHeader("Location", "/contact");
      res.end();
      break;
    default:
      route += "404.html";
      res.statusCode = 404;
  }

  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data)
      // res.end()
      // o:
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
