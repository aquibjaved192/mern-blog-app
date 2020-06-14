const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersRouter = require('./routes/users');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_CONNECT_API, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
 console.log('MongoDB database connection established successfully.');
});

app.use('/', usersRouter);

app.listen(process.env.API_PORT, () => {
 console.log('server has started on port : ' + process.env.API_PORT);
});
