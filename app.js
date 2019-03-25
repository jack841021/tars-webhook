const axios = require('axios')
const express = require('express')

const app = express()
const tars_host = 'http://10.138.0.2:3000/'
// const tars_host = 'http://114.35.113.181:3000/'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('valid')
})

app.post('/', (req, res) => {
    axios.post(tars_host, req.body)
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('webhook listening on port 3000!')
})
