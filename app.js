const express = require('express');

const app = express();


//register view engine
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.listen(3000);


app.get('/', (req, res) => {
    
    const blogs = [
        { title: "How to Build a React App", snippet: "A step-by-step guide to creating your first React application." },
        { title: "Mastering JavaScript: A Deep Dive", snippet: "Explore the intricacies of JavaScript programming language." },
        { title: "The Future of Web Development", snippet: "A look into the emerging trends and technologies shaping the web." }
      ]

    //res.send('<h1> Home </h1>')
    //res.sendFile('./views/index.html', {root: __dirname})
    res.render('index.ejs', {title: 'Home', blogs})
})

app.get('/about', (req, res) => {      
    //res.send('<h2> About </h2>')
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about.ejs', {title: 'About'})
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Creat Blog'})
})

app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname})
    res.render('404', {title: '404'})
})