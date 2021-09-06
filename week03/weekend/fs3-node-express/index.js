// https://fullstackopen.com/en/part3/node_js_and_express
// primary purpose of the backend server is to offer raw data in JSON format to frontend
console.log('hello world');

// imports NOde's built-in web server module
const http = require('http')
// also a way to imports web server module
// import http from 'http'

// let create list of notes for server to return JSON data
let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]


// use createServer method from http module 
// to create a new web server
// an event handler is registered to the server, that is called every time an HTTP request is made to the server address.
const app = http.createServer((request, response) => {

    // --- beginning code
    // // the request is responded to with the status code 200
    // // Content-type header set to text
    // response.writeHead(200, { 'Content-Type': 'text/plain' })
    // // content of the site to be returned set to Hello World
    // response.end('Hello World')

    // --- let's try passing in notes to the frontend.
    // Content-Type header informs the receiver data is in JSON
    response.writeHead(200, { 'Content-Type': 'application/json' })
    // notes array transformed into JSON with JSON.stringify(notes)
    response.end(JSON.stringify(notes))
})

// port 3001 is being listen by the web server called app
const PORT = 3001
// the server is assigned to the variable app
app.listen(PORT) 
console.log(`Server running on port ${PORT}`)