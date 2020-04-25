const express = require('express');
const morgan = require('morgan');

const commentRouter = require('./routes/commentRouter');


const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/comments', commentRouter);


module.exports = app;