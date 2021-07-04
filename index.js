var http = require("http");
var fs = require("fs");
var path = require("path");
port = 2020;
var server = http.createServer( (req, res) => {
    console.log(`request was made at ${req.url}`);
if(req.url==="/home" || req.url === "/"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream( "home.html").pipe(res);
}
else if (req.url === "/about-us"){
    res.writeHead(301, {"Location": "/about"});
    res.end();
}

 else if (req.url==="/contact"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream( "contact.html").pipe(res);

} else if (req.url === "/about"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream( "about.html").pipe(res);
}

else{ res.writeHead(404, {"Content-Type": "text/html"});
fs.createReadStream( "error.html").pipe(res);

}
}); 

server.listen(2020, "localhost", () => {
    console.log(`server running at ${port}`);
}) 