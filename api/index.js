const express = require('express')

const app = express()

app.post('/', (req, res) => {
  console.log(req)
  console.log(res)
})

module.exports = {
  path: '/callback/apple/',
  handler: app
}
