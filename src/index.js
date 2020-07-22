const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Static files
app.use(express.static(__dirname + '/public'));

// Server up
app.listen(app.get('port'), () => {
    console.log('Server up listening to port ', app.get('port'));
});