const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');

var employee_controller = require("./controllers/employeeController.js");

var app = express();
app.use(body_parser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(4000, () => console.log("Server started at port: 4000"));

app.use('/employees', employee_controller);