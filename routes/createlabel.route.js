var express = require('express')
const createLabel = express.Router()

createLabel.route('/customizeemail').get((req, res) => {
  res.status(200).send('customized email')
})

module.exports = createLabel
