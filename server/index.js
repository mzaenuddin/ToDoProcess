const cors = require('cors')
const express = require('express')
const router = require('./routers')

const app = express()
const port = 3000

app.use(cors()) // untuk cors javascript 

//satu paket 
app.use(express.json()) // allowing json file
app.use(express.urlencoded({extended: true})) // enable true 


/*app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/

app.use(router)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
