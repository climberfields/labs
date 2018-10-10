const express = require('express');
const app = express();
const Beer = require('./models/beers')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Is something showing up on my page?')
})

app.get('/beers', (req, res) => {
    res.send(Beer)
})

// this is to make sure all my data is showing up on the page
app.get('/beers/:index', (req, res) => {
//    res.send(Beer[req.params.index])
    res.render('show.ejs', {
        beer: Beer[req.params.index]
    })
});



if(req.body.readyToDrink === 'on') {
    req.body.readyToDrink = true 
} else {
    req.body.readyToDrink = false
}


app.get('/beers/new', (req, res) => {
    res.render('new.ejs')
})

app.listen(3001, () => {
    console.log('THIS APP BE BACK FROM THE DEAD');
})
