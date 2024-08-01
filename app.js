const express = require('express');

const app = express();

app.listen(3000);


app.get('/', (req, res) => {
    //res.send('<h1> Home </h1>')
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    //res.send('<h2> About </h2>')
    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname})
})