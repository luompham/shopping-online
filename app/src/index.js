const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 8080;
//const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
const sortMiddleware = require('./app/middlewares/SortMiddleware');


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
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';
                const icons = {
                    default: 'bi bi-chevron-expand',
                    asc: 'bi bi-sort-down-alt',
                    desc: 'bi bi-sort-down'
                };

                const types = {
                    default: 'asc',
                    asc: 'desc',
                    desc: 'asc'
                }
                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}">
                <i class="${icon}"></i>
            </a>`;
            }
        }
    })
);
app.set('view engine', '.hbs');
app.set('views', './app/src/resources/views');

//Custom middleware
app.use(sortMiddleware);

//route init
route(app);


//connect to database
db.connect();

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

