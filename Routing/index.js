import http from "http";

const server = http.createServer((req, res) => {
    const newLocal = '/contact';
    if(req.url ==='/'){
        res.end("<h1>Home</h1>");
    }else if(req.url === '/about'){
        res.end("<h2>About</h2>")
    }else if(req.url === '/contact'){
        res.end("<h2>contact</h2>")
    }else{
        res.end("<h2>404 page not found</h2>")
    }
});




server.listen(8000, () => console.log("server up!"));
