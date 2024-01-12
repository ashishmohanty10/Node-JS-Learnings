import http, { createServer } from "http";
import fs from "fs";
import { error } from "console";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h3> 404 Page Not Found </h3>");
  }
});

server.listen(8000, () => console.log("server up!"));
