/**
 *
 * Author:  George Simos - georgesimos.com
 *
 * License: Copyright (c) 2019 George Simos
 * @link https://github.com/georgesimos/bookstore
 *
 */

const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoose');
const routes = require('./routes');

// Make all variables from our .env file available in our process
dotenv.config({ path: '.env.sample' });

// Init express server
const app = express();

// Connect to MongoDB.
connectDB();

// Middlewares & configs setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable('x-powered-by');
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

// Here we define the api routes
app.use(routes);

const port = process.env.PORT || 8080;
const address = process.env.SERVER_ADDRESS || 'localhost';

app.get('/', (req, res) => res.send('Hello From Our Awesome Book Store!'));

app.listen(port, () => console.log(`Server running on http://${address}:${port}`));
