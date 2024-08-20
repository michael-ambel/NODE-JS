const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

//connect to database
const uri = "mongodb+srv://nodeblog:nodeblog@nodecluster.5en2xcv.mongodb.net/blogsDB?retryWrites=true&w=majority&appName=nodeCluster";
mongoose.connect(uri)
.then((result) => { 
    console.log('DB connected!');
    app.listen(3000, () => {
        console.log('Server connected!');
    });
})
.catch((err) => {console.log(err);})


//register view engine
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    
    // const blogs = [
    //     { title: "How to Build a React App", snippet: "A step-by-step guide to creating your first React application." },
    //     { title: "Mastering JavaScript: A Deep Dive", snippet: "Explore the intricacies of JavaScript programming language." },
    //     { title: "The Future of Web Development", snippet: "A look into the emerging trends and technologies shaping the web." }
    //   ]

    //res.send('<h1> Home </h1>')
    //res.sendFile('./views/index.html', {root: __dirname})
    // res.render('index.ejs', {title: 'Home', blogs})

    res.redirect('/blogs')
})


// app.get('/blog-post', (req, res) => {
//     const blogs = new Blog({
//         title: "Blog 2", 
//         snippet: "How to Build a React App",
//         body: "A step-by-step guide to creating your first React application."
//     })

//     blogs.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })
app.delete('/blog/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect:'/blogs'})
    }).catch((err) => {
        console.log(err);
    })
})

app.get('/blogs', (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) =>{
        res.render('index.ejs', {title:'All Blogs', blogs: result})
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/blog', (req, res) => {
   const blog = new Blog(req.body)
    blog.save()
    .then((result) => {
        res.redirect('/blogs')
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Creat Blog'})
}) 

app.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then((result) => {
        res.render('content', {title: 'Blog', blog: result})
    })
})



app.get('/about', (req, res) => {      
    //res.send('<h2> About </h2>')
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about.ejs', {title: 'About'})
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})



app.use((req, res) => {
    //res.sendFile('./views/404.html', {root: __dirname})
    res.render('404', {title: '404'})
})