const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Static files

app.use(express.static(__dirname + '/public'));

// Server up
app.listen(app.get('port'), () => {
    console.log('Server up listening to port ', app.get('port'));
});