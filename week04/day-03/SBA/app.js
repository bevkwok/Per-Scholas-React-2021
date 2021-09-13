const http = require('http')

const express = require('express')

const fs = require('fs')

const app = express()

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello, This is Beverly\'s Node.js SBA </h1>');
})

app.get('/animals', (req, res) => {
    fs.readFile('./animals.txt', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return;
        }

        const queryParams = req.query;
        console.log(queryParams);

        let desiredAnimal = '';

        const animalsArray = data.split('\n');
        console.log(animalsArray);

        if (!req.query.q) {
            animalsArray.forEach(animal => res.write(`${animal}\n`));
        } else {
            console.log('Animal query param is ', queryParams.q);
            desiredAnimal = animalsArray.filter(animal => animal.toLowerCase().includes(queryParams.q.toLowerCase()))
            console.log(desiredAnimal);
            if (desiredAnimal.length === 0) {
                res.write(`Can\'t find the kind of animal you are looking for.`);
            } else {
                desiredAnimal.forEach(animal => res.write(`${animal}\n`));
            }
        }
        res.end();
    })
})


app.post('/animals', (req, res) => {
    const body = req.body
    console.log(body);
    console.log(body.content);


    // if there's no content in the body, 400 error
    if (!body.content) { 
        return res.status(400).json({
            error: 'You didn\'t provide an animal name.'
        })
    }

    fs.appendFile('./animals.txt', body, function (err) {
        if (err) {
            console.log(err);
        }
        console.log(`Added ${body} to animals.txt file`);
    });
    res.end();
})


app.delete('/animals', (req, res) => {
    const body = req.body
    console.log(body);
    console.log(body.content);

    if (!body.content) { 
        return res.status(400).json({
            error: 'Please give us a name of the animal to delete.'
        })
    }

    fs.readFile('./animals.txt', 'utf8', function(err, data)
    {
        if (err) {
            console.log(err);
        }
        // data is the file contents as a single unified string
        // .split('\n') splits it at each new-line character and all splits are aggregated into an array (i.e. turns it into an array of lines)
        // .slice(1) returns a view into that array starting at the second entry from the front (i.e. the first element, but slice is zero-indexed so the "first" is really the "second")
        // .join() takes that array and re-concatenates it into a string
        const animalsArray = data.split('\n');
        
        const newAnimalList = animalsArray.filter(animal => animal.toLowerCase() == body.content);
        console.log(newAnimalList);

        // https://stackoverflow.com/questions/38843016/how-to-remove-one-line-from-a-txt-file/38843461

        // fs.writeFile(filename, linesExceptFirst);
    });
    // if note existes and it is removed
    // respond with 204 - no content + no data
    response.status(204).end()
    // not a default to return 204, can also 404
})

app.listen(PORT, () => {
    console.log(`App listening at port http://localhost:${PORT}/`);
})