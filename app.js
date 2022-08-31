const express = require("express")
const bodyParser = require("body-parser")
const fs = require('fs');

// create our express app
const app = express()

//cors policy
let cors = require("cors");
app.use(cors());

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./Routes/Route')
app.use('/', routes)

// PORT
const PORT = process.env.PORT || 3000;
//start server
app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}!`)
);