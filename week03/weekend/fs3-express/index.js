// https://fullstackopen.com/en/part3/node_js_and_express
// primary purpose of the backend server is to offer raw data in JSON format to frontend


// imports Node's built-in web server module
const http = require('http')
// also a way to imports web server module
// import http from 'http'
const express = require('express')
// or
// import express from 'express'
// an express application got created and stored in this app variable
const app = express()
// need json-parser to use POST request
app.use(express.json())
// * json-parser is something called "middleware"
// * Middleware is used to handle request and response object

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

// this event handler handles HTTP GET requests made to / (root)
// request parameter has info of the HTTP request
// response parameter define how to respond to the request
app.get('/', (request, response) => {
    // answering request by using send() of the response object
    // h1 data is passed into the send method
    // express automatically set Content-Type header to text/html
    // with status code being 200
    response.send('<h1>Hello World!</h1>')
})

// this event handler handles GET request made to /notes
app.get('/api/notes', (request, response) => {
    // responsing request using json() method of the response object
    // calling json() sends the notes array and turns it to JSON format
    // express automatically set Content-Type header to application/json
    response.json(notes)

    // * with only node, you have to use the JSON.stringify()
    // * JSON is a string, not a JS object
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)

    // try to console.log inside to find method to debug
    const note = notes.find(note => note.id === id)

    // only return if note id exist
    if (note) {
        response.json(note)
    } else {
        // no data attached to response
        // so use status() method to set the status
        // end() to respond to request without data.
        response.status(404).end()
        // API if for dev, so only need to display error code
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    // if note existes and it is removed
    // respond with 204 - no content + no data
    response.status(204).end()
    // not a default to return 204, can also 404
})

const generateId = () => {
    const maxId = notes.length > 0
        // it vreates a new array that has all the ids of the notes
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body
    console.log(body);
    console.log(body.content);


    // if there's no content in the body, 400 error
    if (!body.content) { 
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        // if important property is missing, default to false
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }
    
    notes =  notes.concat(note)


    // the event handler access the data from body property of the request object
    // that body property would be undefined wihtout a json-parser
    // json-paser takes JSON and turn it into JS object and attaches to the body property of the request object
    console.log(note)
    response.json(note)
})

// ***** WHAT TO DO IF POST REQUEST FAIL? *****
// find out what header have been set in the HTTP request
// get method of the request object can be used for getting the value of a single header
// console.log(request.headers)

// ---------- TESTING TIME ---------- 
// * Postman

// port 3001 is being listen by the web server called app
const PORT = 3001
// the server is assigned to the variable app
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})