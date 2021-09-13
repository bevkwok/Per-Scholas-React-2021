const { response } = require('express');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Note how we pass a callback function to create our webserver.
// Whenever an http request is received, node.js will call this function.
const server = http.createServer((request, response) => {

    // Setting HTTP status code of the response. 
    request.statusCode = 200;

    // Set HTTP response headers.
    response.setHeader('Contect-Type', 'text/plain');

    // The response object is a node.js *stream* object - 
    // that’s why we pass in response body content in the .end() call.

    response.end('<p>Hello, World!</p>');
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});