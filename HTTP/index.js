import http from "http";

// creatong a server

const server = http.createServer((req, res) => {
    // res.setHeader("content type","html")
    res.statusMessage= 404
    res.write("<h1>Hello this is form node js file<h1>")
});

server.listen(8000, () => console.log("server up"));
