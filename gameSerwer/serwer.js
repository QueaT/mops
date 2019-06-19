const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const config = require('./config');
var cors = require('cors')

const routes = require('./Routes/route');
var path = require('path');

const app = express();



mongoose.connect(`mongodb+srv://admin:${config.db}@cluster0-ofgrv.mongodb.net/test?retryWrites=true`, {
    useNewUrlParser: true
})


//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/game'));

app.use(cors());

//Routes

app.use('/',routes);

//serwer


app.listen(port);
console.log(`Server is running at ${port}`);

app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = app;