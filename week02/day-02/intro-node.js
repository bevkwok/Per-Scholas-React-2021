//////// Node
// a runtime environment
// runs V8, Google Chrome JS engine
// single thread, event loop
// all callbacks
// import http from 'http'; // ES6 way to do it 
var http = require('http'); // older way to do it
var hi = process.env.HI;
console.log(hi); // undefined
// const port = process.env.PORT
var port = 9999;
//// What is a port?
// It's like a door. a location, an IP address
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Contect-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});
server.listen(port, function () {
    console.log("Server running at port " + port);
});
var port2 = 8888;
var otherServer = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Contect-Type', 'text/html');
    res.end('<h1>Hello, World! Port 2</h1>');
});
otherServer.listen(port2, function () {
    console.log("Server running at port 8888");
});
