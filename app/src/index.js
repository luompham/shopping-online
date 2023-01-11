const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 5000;
//const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');


//import { engine } from 'express-handlebars';



//app.use(morgan('combined'));

//Override method
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine('.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    })
);
app.set('view engine', '.hbs');
app.set('views', './app/src/resources/views');


//route init
route(app);

//connect to database
db.connect();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

