const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'n0m3l0',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'))

//Routes
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});