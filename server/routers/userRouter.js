const route = require('express').Router()
const UserController = require('../controller/userController')

route.get('/', UserController.getAllUsers) 

   

route.post('/register', (req, res) => {
    res.send('router di User')
  })
  
 module.exports = route 
