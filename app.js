const axios = require('axios')
const express = require('express')

const app = express()
const tars_host = 'http://10.138.0.3:80/'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('valid')
})

app.post('/', async (req, res) => {
    console.log(JSON.stringify(req.body, null, 2) + '\n')
    await axios.post(tars_host)
    res.sendStatus(200)
})

app.listen(80, () => {
    console.log('tars-webhook listening on port 80!')
})
