"use strict"

/* Server Configurations */
const express = require("express");

const app     = express();
const port    = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({
	extended: true
}));
app.set("view engine", "ejs");
/* End Server Configurations */

/* Load All Routes */
const studentsRoute = require('./routes/students');
const teachersRoute = require('./routes/teachers');
const subjectsRoute = require('./routes/subjects');

app.use('/students', studentsRoute);
app.use('/teachers', teachersRoute);
app.use('/subjects', subjectsRoute);

/* End Load All Routes */


app.listen(port, () => {
  console.log(`App listening on localhost port ${port}`);
});