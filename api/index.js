const url = require('url')
const qs = require('querystring')
const { request } = require('http')
const express = require('express')

const app = express()

app.get('/callback/apple/', (req, res) => {
  // let body = '';
  // request.on('code', (code) => {

  // })
  console.log(req)
  console.log(res)
})

app.get('/api', (req, res) => {
  console.log(req)
  console.log(res)
  console.log('hello')
})

module.exports = {
  path: '/',
  handler: app
}
