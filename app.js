const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const doctorsRouters = require('./API/router/doctors')
const centresRouters = require('./API/router/centres')
const appointmentsRouter = require('./API/router/appointments')
const usersRouter = require('./API/router/users')
const mongoose = require("mongoose")
require('dotenv').config
mongoose.connect(process.env.mongoConnection)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))
app.use(morgan("dev"))

app.use('/doctors', doctorsRouters)
app.use('/centres', centresRouters)
app.use('/appointments', appointmentsRouter)
app.use('/users', usersRouter)
module.exports = app

