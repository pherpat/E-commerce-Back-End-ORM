const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

// Port
const app = express();
const PORT = process.env.PORT || 3001;

// setting up middleware for an Express.js application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middleware is added to the Express aplication
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
