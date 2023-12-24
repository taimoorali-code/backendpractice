
require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abcd', (req, res)=>{
    res.send('this is first request')

})
app.get('/taimoor', (req, res)=>{
    res.send('this is first request')

})
app.get('/hello', (req, res)=>{
    res.send('this is second request')

})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})