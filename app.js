const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes');

const app = express();

app.use('/api/v1/users', userRouter);


module.exports = app;