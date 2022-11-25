const express = require('express')

const app = express()

function logTime(req, res, next) {
    console.log(new Date())
    next()
}

app.use(logTime)

app.get('/about', (req, res) => {
    console.log("envoi des infos")
    res.send("auteur : enzo")
})

app.get('*', (req, res) => {
    console.log("abort")
    res.statusCode = 404
    res.send("undefined route")
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})