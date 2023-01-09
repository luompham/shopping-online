const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
//const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');


//import { engine } from 'express-handlebars';



//app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './app/src/resources/views');


//route init
route(app);

//connect to database
db.connect();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

