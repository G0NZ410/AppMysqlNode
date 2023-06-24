const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const app = express();

//importing routes
const customerRoutes = require('./routes/customer')


//Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'sqluser',
    password: 'password',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'));

//Routes
app.use('/', customerRoutes);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`);
});