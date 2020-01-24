var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

var indexRouter = require('./routes/index');
const shopsRouter = require("./routes/shops");

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // Parse application/jsom

app.use('/', indexRouter);
app.use('/shops', shopsRouter);

// Error Handling
app.use((error, req, res, next) => {
    console.log(error);
    const {
        message,
        statusCode = 500,
        data
    } = error;

    res.status(statusCode).json({
        message,
        data
    })
})


module.exports.handler = serverless(app);