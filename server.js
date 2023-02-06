const express = require('express');


// import sequelize connection
const sequelize = require('./config/connection');
const routes = require('./routes');

// Port
const app = express();
const PORT = process.env.PORT || 3001;

// setting up middleware for an Express.js application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// Force false so data doesn't get dropped on every sync
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});