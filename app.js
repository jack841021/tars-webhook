const fs = require('fs')
const https = require('https')
const express = require('express')

const app = express()
const tars_host = 'http://10.138.0.3:3000/'

app.get('/', (res, req) => {
    req.send('valid')
})

app.post('/', async (res, req) => {
    await axios.post(tars_host + 'webhook')
    res.sendStatus(200)
})

const options = {
    key: fs.readFileSync('.ssl/private.key'),
    cert: fs.readFileSync('.ssl/certificate.crt')
}

https.createServer(options, app).listen(443, () => {
    console.log('tars-webhook listening on port 3000!')
})