const express = require('express');
const morgan = require('morgan');

const commentRouter = require('./routes/commentRouter');
const firstChildRouter = require('./routes/firstChildRouter');
const SecondChildRouter = require('./routes/secondRouter');


const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/comments/secondchild', SecondChildRouter);
app.use('/api/v1/comments/firstchild', firstChildRouter);
app.use('/api/v1/comments', commentRouter);


module.exports = app;