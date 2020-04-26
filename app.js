const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const commentRouter = require('./routes/commentRouter');
const firstChildRouter = require('./routes/firstChildRouter');
const SecondChildRouter = require('./routes/secondRouter');
const messages = require('./routes/messages');


const app = express();
app.use(morgan('dev'));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use('/messages', messages);
app.use('/api/v1/comments/secondchild', SecondChildRouter);
app.use('/api/v1/comments/firstchild', firstChildRouter);
app.use('/api/v1/blogscomment', commentRouter);

module.exports = app;