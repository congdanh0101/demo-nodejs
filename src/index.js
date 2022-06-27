const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./route');
const methodOverride = require('method-override')
const db = require('./config/db');

const app = express();
const port = 3000;

db.connectMongoDB();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
//HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers:{
            sum: (a,b) => a+b,
        }
    })
);
app.set('views', path.join(__dirname, 'resources/views'));
app.set('view engine', 'hbs');

// app.get('/hahaha',(req,res)=>{
//     res.send("Hello World!")
// })

//Route init
route(app);

app.listen(port, () =>
    console.log(`Server started at http://localhost:${port}`),
);
