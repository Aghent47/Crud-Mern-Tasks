const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database');

const app = express();

// settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./router/task.routes'));

//Static files
app.use(express.static(__dirname + '/public'));
//app.use(express.static(path.join(__dirname, 'public')));


// Starting the server
app.listen(app.get('port'), () => {
    console.log('server on port:', app.get('port'));
});