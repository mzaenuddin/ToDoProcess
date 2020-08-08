const route = require('express').Router()


route.get('/', (req, res) => {
    res.send('router di Todo')
  })

   
route.get('/:id', (req, res) => {
    res.send('router Get di toDo')
  })


route.post('/add', (req, res) => {
    res.send('router Post di toDo')
  })


route.put('/:id', (req, res) => {
    res.send('router Put di toDo')
  })


  route.delete('/:id', (req, res) => {
    res.send('router Put di toDo')
  })


 module.exports = route 
