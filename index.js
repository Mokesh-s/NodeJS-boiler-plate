var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var createLabel = require('./routes/createlabel.route')
const port = process.env.PORT || 3001
var cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/createlabel', createLabel)

app.listen(port, () => {
  console.log(`port listening to: ${port}`)
})
