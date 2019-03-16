const fs = require('fs')
const https = require('https')
const express = require('express')

const app = express()

const options = {
    key: fs.readFileSync('.ssl/private.key'),
    cert: fs.readFileSync('.ssl/certificate.crt')
}

app.get('/', (res, req) => {
    req.send('secure')
})

https.createServer(options, app).listen(443, () => {
    console.log('tars-webhook listening on port 3000!')
})
