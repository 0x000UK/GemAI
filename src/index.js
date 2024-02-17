const express = require('express');
const session = require('express-session');
const hbs = require('hbs');

const path = require('path');
require('./db/connect');

const port = process.env.PORT || 3000

// to run the express server
const app = express();

//using sessions
app.use(session({
    secret: '0000',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const publicPath = path.join(__dirname, '..', 'public');

app.use('/static', express.static(publicPath));

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.set('views','views' );
hbs.registerPartials('views/partials/');


// const index = require('./routes/routes');
app.use('/', index);


app.listen(port, () => {
    console.log("\x1b[32m",`[NodeJS] server is running at localhost:${port}`);
});

