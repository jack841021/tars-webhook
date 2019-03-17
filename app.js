const axios = require('axios')
const express = require('express')

const app = express()
const tars_host = 'http://10.138.0.2:3000/'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('valid')
})

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2) + '\n')
    axios.post(tars_host, req.body).catch(error => {
        console.log(error)
    })
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('webhook listening on port 3000!')
})
