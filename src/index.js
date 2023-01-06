const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

//import { engine } from 'express-handlebars';



//app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', engine({ extname: '.hbs' }));
//app.engine('handlebars', engine());
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});