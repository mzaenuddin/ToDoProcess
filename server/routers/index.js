const express = require("express");

const route = require('express').Router()

//Use Route 
//const userRoute = require('./userRoute.js')
//const todoRoute = require('./todoRoute.js')

//harus ada suggest nya baru dipilih untuk require root nya JS 


const userRoute = require('./userRouter.js')
const todoRoute = require('./todoRouters.js')

route.get('/', (req, res) => {
    res.send('Hello World!')
  })

 route.use('/user', userRoute)
 route.use('/todo', todoRoute)
  

  
 module.exports = route 
