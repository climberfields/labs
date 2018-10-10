const express = require('express');
const app = express();
const CRUD = ('./CRUD')



app.get('/', (req, res) =>{
    console.log("Giving feedback!")
})






app.listen(3000, (req, res) => {
    console.log("This thing is turned on!")
})