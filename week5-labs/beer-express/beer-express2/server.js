const express = require('express');
const app = express();
const Books = ('./not beers/books')


app.get('/', (req, res) => {
    console.log('this rocks')
})

app.get('/books', (req, res) => {
    res.send(Books)
})

app.get('/books/:index', (req, res) => {
    res.send(Books[req.params.index])
})







app.listen(3000, (req, res) => {
    console.log('Beer 2!')
})