const url = require('url')
const qs = require('querystring')
const { request } = require('http')
const express = require('express')

const app = express()

app.post('/callback/apple/', (req, res) => {
  // let body = '';
  // request.on('code', (code) => {

  // })
  console.log(req)
  console.log(res)
})

module.exports = {
  path: '/',
  handler: app
}
