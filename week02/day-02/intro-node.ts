//////// Node
// a runtime environment
// runs V8, Google Chrome JS engine
// single thread, event loop
// all callbacks



// import http from 'http'; // ES6 way to do it 
const http = require('http') // older way to do it

const hi = process.env.HI;
console.log(hi); // undefined


// const port = process.env.PORT
const port = 9999
//// What is a port?
// It's like a door. a location, an IP address

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contect-Type', 'text/html')
    res.end('<h1>Hello, World!</h1>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

const port2 = 8888
const otherServer = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Contect-Type', 'text/html')
    res.end('<h1>Hello, World! Port 2</h1>')
})

otherServer.listen(port2, () => {
    console.log(`Server running at port 8888`);
})



////// detail explain
const doThisWehnServerGetsARequest = function(request, response) {
    response.statusCode = 200
    
}