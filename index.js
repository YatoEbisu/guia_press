const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
//
const categoriesController = require('./categories/CategoriesController');
const categoriesArticles = require('./articles/articlesController');
//
const Article = require('./articles/Article');
const Category = require('./categories/Category');

// View Engine
 app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//  Database
connection
    .authenticate()
    .then(() => {
        console.log('connection was successful')
    })
    .catch((err) => {
        console.log(err)
    })

// Routes
app.use('/', categoriesController);
app.use('/', categoriesArticles);

app.get('/', (req, res) => {
    res.render('index');  
})

app.listen(8080, () => {
    console.log('server started on port 8080')
});