const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


app.get('/', (req, res) => {

    var options = {
        root: path.join(__dirname)
    }

    var fileName = 'index.html'
    res.sendFile(fileName, options, function (err) {
        if (err) next(err)
        else {
            console.log('Send: ', fileName)
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})