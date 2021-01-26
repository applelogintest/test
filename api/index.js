const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('API root')
})

module.exports = {
  path: '/callback/apple',
  handler: app
}
