// https://fullstackopen.com/en/part3/node_js_and_express

const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());


let persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
    },
    { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
    },
    { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('Starting to build this person API')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    let numOfPeople = persons.length;
    let currenTime = new Date();

    res.write(`<p>Phonebook has info for ${numOfPeople} people</p>`)
    res.write(`${currenTime}`)
    res.send()
})

app.get('/api/persons/:id', (req, res) => {
    const personId = Number(req.params.id)
    const person = persons.find(person => person.id === personId)

    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const personId = Number(req.params.id)
    persons = persons.filter(person => person.id !== personId)
    res.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0
        ? Math.max(...persons.map(person => person.id))
        : 0
    return Math.ceil(Math.random() * 10 + maxId)
}

const checkName = (name) => {
    return persons.find(person => person.name === name)
}

app.post('/api/persons', (req, res) => {
    const body = req.body
    console.log(body);


    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    } else if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }

    if (checkName(body.name)) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }



    const newPerson = {
        id: generateId(),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(newPerson)
    res.json(persons)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})